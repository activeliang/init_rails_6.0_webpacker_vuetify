// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// const config = environment.toWebpackConfig()
// module.exports = smp.wrap(config)
//

module.exports = environment.toWebpackConfig()
