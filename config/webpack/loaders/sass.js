const { config } = require('@rails/webpacker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.sass$/,
  use: [
    config.extract_css === false ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        sassOptions: {
          // data: `@import "app/javascript/manager/styles/main.scss"`,
          fiber: require('fibers'),
          indentedSyntax: true
        }
      }
    }
  ]
}
