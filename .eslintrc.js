module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { ecmaVersion: 8, sourceType: 'module' },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        settings: {
          react: { version: 'detect' },
          'import/resolver': {
            typescript: {},
          },
        },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:react/recommended',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended',
          'plugin:prettier/recommended',
        ],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: ['@/features/*/*'],
            },
          ],
          'linebreak-style': ['error', 'unix'],
          'react/prop-types': 'off',
  
          'react/react-in-jsx-scope': 'off',
  
          'jsx-a11y/anchor-is-valid': 'off',
  
          '@typescript-eslint/no-unused-vars': ['error'],
  
          '@typescript-eslint/explicit-function-return-type': ['off'],
          '@typescript-eslint/explicit-module-boundary-types': ['off'],
          '@typescript-eslint/no-empty-function': ['off'],
          '@typescript-eslint/no-explicit-any': ['off'],
  
          'react/no-unescaped-entities': ['off'],
  
          'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
      },
    ],
  };
  