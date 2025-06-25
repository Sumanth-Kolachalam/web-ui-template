import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ command, mode }) => {
    // Load env vars starting with VITE_ prefix
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    const isDev = command === 'serve';
    const isProd = command === 'build';

    return {
        plugins: [
            react(),
            dts({
                entryRoot: 'src',
                insertTypesEntry: true,
                outputDir: 'dist/types',
            }),
            tailwindcss(),
        ],
        base: env.VITE_BASE_URL || '/',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'PfUiComponents',
                formats: ['es', 'cjs'],
                fileName: (format) => `pf-ui-components.${format}.js`,
            },
            outDir: '../dist',
            sourcemap: isDev,
            minify: isProd ? 'esbuild' : false,
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                    manualChunks: undefined,
                },
            },
        },
        define: {
            __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        },
    };
});
