const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    PolynomialRegression: './src/PolynomialRegression.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  targets: {
                    ie: 11,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: 'production',
  devtool: 'source-map',
};
