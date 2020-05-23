const {environment} = require('@rails/webpacker')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// splitChunks options
environment.splitChunks((config) => Object.assign({}, config, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(vue|vuetify|vue-router|tailwindcss|axios)/,
          name: 'vendors',
          chunks: 'initial',
        }
      }
    }
  }
}))

// env 参数
const webpack = require('webpack')
const dotenv = require('dotenv')
const dotenvFiles = [
  `.env.${process.env.NODE_ENV == 'production' ? 'pro' : 'dev'}`,
]
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true })
})
environment.plugins.prepend('Environment', new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))))


const MiniCssExtractPlugin = require('mini-css-extract-plugin')
environment.plugins.append('MiniCssExtractPlugin', new MiniCssExtractPlugin({filename: 'css/[name]-[contenthash:8].css', chunkFilename: 'css/[name]-[contenthash:8].chunk.css'}))

const vue = require('./loaders/vue')
environment.loaders.prepend('vue', vue)
// environment.loaders.append('i18n-yml', i18n_yml)

const sass = require('./loaders/sass')
environment.loaders.append('sass', sass)

const scss = require('./loaders/scss')
environment.loaders.append('scss', scss)

// 自定alias路径
const customConfig = require('./custom')
environment.config.merge(customConfig)

const file = require('./loaders/file')
environment.loaders.prepend('file', file)

const {VueLoaderPlugin} = require('vue-loader')
environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin({
  match(originalTag, {kebabTag, camelTag, path, component}) {
    if (kebabTag.startsWith('core-')) {
      return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
    }
  }
}))

// environment.loaders.forEach((item, index) => {
//   if (item.value.test.test('tt.js')) {
//     environment.loaders[index].value.use.unshift({
//       loader: 'thread-loader',
//       options: {
//         workers: 4,
//         workerParallelJobs: 50,
//       }
//     })
//   }
// })

environment.plugins.append('CleanWebpackPlugin', new CleanWebpackPlugin())

module.exports = environment
