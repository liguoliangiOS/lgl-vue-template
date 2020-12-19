module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? './' : '',
  productionSourceMap: false,
  outputDir: 'dist', // 构建输出目录
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: { //设置路径别名
        'components': '@/components',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
