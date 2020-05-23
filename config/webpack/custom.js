const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@packs': path.resolve(__dirname, '..', '..', 'app/javascript/packs'),
      '@components': path.resolve(__dirname, '..', '..', 'app/javascript/packs/components'),
      '@api': path.resolve(__dirname, '..', '..', 'app/javascript/packs/api'),
      '@plugins': path.resolve(__dirname, '..', '..', 'app/javascript/packs/plugins')
    }
  }
}
