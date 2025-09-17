import { defineConfig } from 'eslint/config';
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPerfPlugin from 'eslint-plugin-react-perf';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
    // Ignore build/config files
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/*.d.ts'],
    },

    // Base JS + TS rules
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked, // enables type-aware rules
    ...tseslint.configs.stylisticTypeChecked, // style-sensitive + type-aware

    // React, Hooks, Accessibility, Perf
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.lint.json', // picks up tsconfig.json automatically
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
            'react-perf': reactPerfPlugin,
        },
        rules: {
            ...reactHooks.configs['recommended-latest'].rules,
            ...reactRefresh.configs.vite.rules,
            ...jsxA11y.flatConfigs.recommended.rules,
            ...reactPerfPlugin.configs.flat.recommended.rules,

            // Overrides
            'no-unused-vars': 'off', // handled by TS
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'arrow-body-style': ['warn', 'always'],
        },
        settings: {
            react: { version: 'detect' },
        },
    },

    // Prettier last
    prettierConfig,
]);
