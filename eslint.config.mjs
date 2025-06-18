// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPerfPlugin from 'eslint-plugin-react-perf';

export default tseslint.config(
  {
    ignores: [
      "**/webpack.config.*js",
      "**/*.config.js",
      "**/*.config.mjs"
    ]
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser
    }
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'react-perf': reactPerfPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReact.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs['recommended-latest'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      ...reactPerfPlugin.configs.flat.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn'],
      "arrow-body-style": ["warn", "always"],
    }
  }
);