const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './src/functions/hello.js',
    './src/functions/jwt.js',
  ],
  output: {
    filename: 'deploy/[name].js',
  }
}
