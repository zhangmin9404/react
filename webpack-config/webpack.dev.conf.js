const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  mode: 'development', // webpack4新增属性，默认返回production,提供一些默认配置，例如cache:true
  devtool: 'cheap-module-eval-source-map',
  // source-map每个module生成对应的map文件
  // eval 每一个module模块执行eval，不生成map文件，在尾部生成一个sourceURL对应前后关系，所以更快
  // cheap 列信息 VLQ编码
  // module 包含了模块之间的sourcemap
  entry: {
    home: './demo/index.js', // 设置入口文件
  },
  output: {
    filename: '[name].js', // 生成的js文件的名字
    path: resolve('dist'), // 生成的js存放目录
    library: 'CBDUIkit',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: { // 配置loader
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('src'), resolve('demo')], // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
        include: [resolve('node_modules')],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
        include: [resolve('src'), resolve('demo')],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  devServer: { // 配置webpack-dev-server， 在本地启动一个服务器运行
    //host: '192.168.1.115', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
    port: 8088, // 端口
    open: true, // 自动打开页面
    openPage: ['?token=xxx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
      template: resolve("/demo/index.html"), // 基于index.html模板进行生成html文件
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ]
}

