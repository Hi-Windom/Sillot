module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'no-only-tests'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-console': 'warn',
    'prefer-const': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-only-tests/no-only-tests': 'error',
  },
  overrides: [
    {
      files: ['packages/**/test/*.js', 'packages/**/*.js'],
      env: {
        mocha: true,
      },
      globals: {
        globalThis: false, // false means read-only
      },
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['packages/integrations/**/*.ts'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
      },
    },
    {
      files: ['benchmark/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
