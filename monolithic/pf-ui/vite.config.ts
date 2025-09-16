import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: ({ name }) => {
                        if (name?.includes('modules')) {
                            const parts = name.split(path.sep);
                            const moduleIndex = parts.indexOf('modules');
                            const moduleName = parts[moduleIndex + 1];
                            return `assets/module-${moduleName}-[hash].js`;
                        }
                        return `assets/[name]-[hash].js`;
                    },
                },
            },
        },
        plugins: [react(), visualizer()],
        resolve: {
            alias: {
                '@modules': path.resolve(__dirname, 'src/modules'),
                '@shared': path.resolve(__dirname, 'src/shared'),
            },
        },
        server: {
            port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 5173,
            strictPort: true,
            open: '/web/login',
        },
    };
});
