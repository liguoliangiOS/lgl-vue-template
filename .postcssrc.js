module.exports = {
   plugins: {
     'autoprefixer': {
        overrideBrowserslist: [
          'Android >= 4.0',
          'iOS >= 7',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8'
        ]
     },
     'postcss-px-to-viewport': {
        unitToConvert: 'px',// 要转化的单位
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        viewportWidth: 750,// 视图宽度
        propList: ['*'],
        selectorBlackList: [],// 不进行px转换的选择器
        minPixelValue: 1, //小于或者等于1的px，不转换为视图单位
        unitPrecision: 5, //指定px转换为视图单位值的小数位数
        mediaQuery: false //允许媒体查询中转换
     }
   }
 }