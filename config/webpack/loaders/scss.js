const { config } = require('@rails/webpacker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.scss$/,
  use: [
    config.extract_css === false ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers')
        }
      }
    }
  ]
}
