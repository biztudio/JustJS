var path = require('path')

module.exports = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.[chunkHash:5].js',
    path: path.resolve(__dirname, 'dist')
  }
}
