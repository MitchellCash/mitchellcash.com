module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['react-app', 'google', 'prettier'],
  rules: {
    'max-len': ['warn', { code: 80 }]
  }
};
