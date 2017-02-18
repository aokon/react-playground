const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    fronted_app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
    ],
  },

  output: {
    path: path.resolve(__dirname, '../assets/javascripts'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            'react',
          ],
        }
      }
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: 2,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};
