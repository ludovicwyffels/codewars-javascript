module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'eslint-config-prettier', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-node',
    'eslint-plugin-promise',
  ],
  rules: {},
};
