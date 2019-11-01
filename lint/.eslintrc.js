const path = require('path');

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
  ],
  rules: {
    "no-underscore-dangle": "off",
    "import/no-unresolved": "off",
    "no-restricted-syntax": ["error", "never"],
    "no-console": "off",
    "linebreak-style": "off",
    "no-await-in-loop": "off"
  }
};
