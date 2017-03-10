const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'stylesheets/frontend_app.css': './style/style.scss',
    'javascripts/fronted_app.js': './src/index.js',
    'javascripts/vendor.bundle.js': [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
    ],
  },

  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: '[name]'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        loader: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=/assets/'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'javascripts/vendor.bundle.js',
      minChunks: 2
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "Hammer": "hammerjs/hammer"
    }),

    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name]'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};
