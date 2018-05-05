const path = require('path');

module.exports = {
  entry: {
    helloworld: './app/hello-world',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/api'
  }
};
