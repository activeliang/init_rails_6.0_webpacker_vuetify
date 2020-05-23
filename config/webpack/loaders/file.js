module.exports = {
  test: /\.(jpeg|jpg|png|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        esModule: false,
      },
    },
  ]
}
