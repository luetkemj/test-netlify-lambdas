const path = require('path');

module.exports = {
  entry: {
    helloworld: './app/helloworld',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};
