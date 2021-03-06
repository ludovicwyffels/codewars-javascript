module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: ['standard', 'plugin:jest/recommended'],
  plugins: ['import', 'standard', 'node', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: [2, 'always']
  }
};
