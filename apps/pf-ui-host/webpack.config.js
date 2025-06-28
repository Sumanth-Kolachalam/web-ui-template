const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const envPathLocal = '.env';
const envPathServer = '.env.production';

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',

    entry: path.resolve(__dirname, 'src', 'index.ts'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/', // adjust based on where it's hosted
      clean: true, // optional: clean output directory before build
    },

    resolve: {
      symlinks: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // allows importing files without extensions
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        },
        {
          test: /\.css$/, // optional: handle CSS
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'Host', // or hostApp depending on role
        filename: 'remoteEntry.js',
        remotes: {
          UIComponents: isProduction
            ? `UIComponents@/web/boilerplate/remoteEntry.js`
            : 'UIComponents@http://localhost:8081/remoteEntry.js',
          Dashboard: isProduction
            ? `Dashboard@boilerplate/remoteEntry.js`
            : 'Dashboard@http://localhost:8082/remoteEntry.js',
        }, // optionally define remotes here
        exposes: {}, // optionally expose components here
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
            strictVersion: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
            strictVersion: true,
          },
          lodash: {
            singleton: true,
            requiredVersion: deps.lodash,
            strictVersion: true,
          },
          jotai: {
            singleton: true,
            requiredVersion: deps.jotai,
            strictVersion: true,
          },
          "react-error-boundary": {
            singleton: true,
            requiredVersion: deps['react-error-boundary'],
            strictVersion: true,
          },
          "react-router": {
            singleton: true,
            requiredVersion: deps['react-router'],
            strictVersion: true,
          },
          ...deps,
          'pf-ui-components': {
            singleton: true,
          },
        },
      }),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),

      new Dotenv({
        path: isProduction ? envPathServer : envPathLocal,
        safe: true,
        systemvars: true,
      }),
      
      !isProduction && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/',
      },
      port: 8080,
      historyApiFallback: true,
      hot: true,
      open: ['/'],
    },
  };
};
