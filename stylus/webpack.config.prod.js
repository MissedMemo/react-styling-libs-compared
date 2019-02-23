const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge( base, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    // webpack 4 replacement for deprecated extract-text-webpack-plugin
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
})