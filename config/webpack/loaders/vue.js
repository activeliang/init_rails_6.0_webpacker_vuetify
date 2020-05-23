module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [
    {
      loader: 'thread-loader',
      options: {
        workers: 4,
        workerParallelJobs: 50
      }
    }, {
      loader: 'vue-loader'
    }
  ]
}
