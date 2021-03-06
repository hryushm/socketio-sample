module.exports = {
  'plugins': [
    'prettier'
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'prettier/prettier': 'error'
  },
};
