// @ts-check
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
    ],
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      // @ts-ignore
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react-refresh/only-export-components': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'function-paren-newline': ['error', 'consistent'],
      '@typescript-eslint/no-unused-vars': 'warn',
      "object-curly-newline": ["error", { "multiline": true, "consistent": true }]
    },
  }
)