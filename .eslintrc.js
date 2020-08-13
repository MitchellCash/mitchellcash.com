module.exports = {
  root: true,

  plugins: ['import', 'prettier'],

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],

  rules: {
    'import/order': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
};
