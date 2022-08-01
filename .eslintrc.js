const config = require('eslint-config-standard-typescript-prettier')

module.exports = {
  ...config,
  ignorePatterns: ['*.js', 'vite.config.ts'],
  parserOptions: { project: './tsconfig.json' },
  plugins: ['eslint-plugin-prettier', 'unused-imports'],
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
