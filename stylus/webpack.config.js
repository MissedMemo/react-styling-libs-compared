const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const poststylus = require('poststylus')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const SOURCE_DIR = resolve('src')

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
      },
      {
        test: /\.styl$/,
        //use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'] // ok for dev builds
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "webpack.html.template"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [poststylus(['autoprefixer'])]
        }
      }
    }),
    // webpack 4 replacement for deprecated extract-text-webpack-plugin
    // (actually, should only apply to PRODUCTION build)
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
}