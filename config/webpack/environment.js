const { environment } = require('@rails/webpacker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
environment.plugins.append('MiniCssExtractPlugin', new MiniCssExtractPlugin({
  filename: 'css/[name]-[contenthash:8].css',
  chunkFilename: 'css/[name]-[contenthash:8].chunk.css'
}))

const vue = require('./loaders/vue')
environment.loaders.prepend('vue', vue)
// environment.loaders.append('i18n-yml', i18n_yml)

const sass = require('./loaders/sass')
environment.loaders.append('sass', sass)

const scss = require('./loaders/scss')
environment.loaders.append('scss', scss)

const { VueLoaderPlugin } = require('vue-loader')
environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())

environment.config.resolve.alias = { 'vue$': 'vue/dist/vue.esm.js' }
module.exports = environment
