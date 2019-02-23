const webpack = require('webpack')
const poststylus = require('poststylus')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { resolve } = require('path')

const SOURCE_DIR = resolve('src')
const OUTPUT_DIR = resolve('dist')

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // Eliminate previous bundle versions
    new CleanWebpackPlugin(OUTPUT_DIR),
    new htmlWebpackPlugin({
      template: "webpack.html.template"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [poststylus(['autoprefixer'])]
        }
      }
    })
  ]
}