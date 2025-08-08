import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import storybook from 'eslint-plugin-storybook'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { globalIgnores } from 'eslint/config'

export default tseslint.config(
  [
    globalIgnores(['dist', '.storybook', 'storybook-static']),
    {
      files: ['**/*.{ts,tsx}'],
      plugins: {
        prettier: eslintPluginPrettier,
      },
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
        eslintConfigPrettier,
      ],
      rules: {
        '@typescript-eslint/no-empty-object-type': 'off',
        'no-empty-pattern': 'off',
        'react-refresh/only-export-components': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
  ],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    extends: [...storybook.configs['flat/recommended']],
  },
)
