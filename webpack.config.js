const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    hello: './src/functions/hello.js',
    jwt: './src/functions/jwt.js',
  },
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: 'functions/[name].js',
  }
}
