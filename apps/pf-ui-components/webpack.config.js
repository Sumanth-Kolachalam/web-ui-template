const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const envPathLocal = ".env";
const envPathServer = ".env.production";

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const isServer = env?.isServer === "true";

  return {
    mode: isProduction ? "production" : "development",

    entry: path.resolve(__dirname, "src", "index.ts"),

    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "auto", // adjust based on where it's hosted
      clean: true, // optional: clean output directory before build
    },

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"], // allows importing files without extensions
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            },
          },
        },
        {
          test: /\.css$/, // optional: handle CSS
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "UIComponents", // or hostApp depending on role
        filename: "remoteEntry.js",
        remotes: {}, // optionally define remotes here
        exposes: {
          "./Button" : "./src/lib/components/Button.tsx",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
            strictVersion: true,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
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
        },
      }),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),

      new Dotenv({
        path: isServer ? envPathServer : envPathLocal,
        safe: true,
        systemvars :true,
      }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 8081,
      historyApiFallback: true,
      hot: true,
      open: true,
    },
  };
};