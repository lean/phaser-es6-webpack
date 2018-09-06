var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/main.js')],
    vendor: ['phaser']
  },
  mode: 'development',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', './build']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }
}
