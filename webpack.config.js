const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    hello: './src/functions/hello.js',
    jwt: './src/functions/jwt.js',
  },
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: 'functions/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|deploy|test)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
