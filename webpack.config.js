const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/index.js')],
  output: {
    path: __dirname + "/build", // 打包后的js文件存放目录
    filename: 'bundle.js' // 打包后的js文件
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // 屏蔽不需要处理的文件 文件夹
        loader: 'bebel-loader'
      },
      {
        test: /|.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-lolader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      }
    ],
    devServer: {
      contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，本实例设置 build 目录
      historyApiFallback: true, //开发单页应用时，如果设置为true，所有的跳转将指向index.html
      inline: true, // 设置为true，自动刷新页面
      port: 8989, // 设置默认监听端口 默认8989
    }
  },
  plugins: [ // 热刷新
    new webpack.HotModuleReplacementPlugin()
  ]
}





