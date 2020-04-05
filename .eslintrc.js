module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'google',
  ],
  rules: {
    "max-len": ["warn", { code: 80 }]
  }
};
