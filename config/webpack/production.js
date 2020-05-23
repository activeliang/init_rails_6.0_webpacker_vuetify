process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
environment.config.merge({ devtool: false })

module.exports = environment.toWebpackConfig()
