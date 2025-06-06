// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files : ["**/*.tsx"],
    extends : [
      eslintPluginReact.configs.flat.recommended,
      reactHooks.configs['recommended-latest']
    ]
  }
);