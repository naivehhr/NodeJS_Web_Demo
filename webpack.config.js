var path = require('path');
var webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
var HOME_DIR = path.resolve(__dirname, 'dist');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|gif)$/i,
        loaders: [
          'url-loader?limit=20000&name=assets/[name]-[hash].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  }
};
