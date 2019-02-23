const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge( base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      }
    ]
  }
})