module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'import/prefer-default-export': 'off',
    'indent': 'off',
    'max-len': ['error', { 'code': 80 }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
        "extensions": [
          '.js',
          '.jsx',
        ],
      },
    },
  },
};