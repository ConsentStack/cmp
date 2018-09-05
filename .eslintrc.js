module.exports = {
  'parserOptions': {
    'allowImportExportEverywhere': true,
    'allowForLoopAfterthoughts': true,
    'parser': 'babel-eslint'
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  'rules': {
    'strict': 0,
    'no-console': 0 // this should be changed for prod...
  },
  'env': { 
    'es6': true,
    'browser': true,
    'node': true,
    'shared-node-browser': true
  }
};