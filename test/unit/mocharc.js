export default {
  require: ['@babel/register', 'test/unit/helpers.js'],
  reporter: 'spec',
  timeout: 2000,
  slow: 5000,
  extension: ['js'],
  spec: 'test/unit/*.js'
};
