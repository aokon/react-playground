const path = require('path');

module.exports = {
  entry: {
    fronted_app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, '../app/assets/javascripts'),
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
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};
