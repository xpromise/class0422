// const px2rem = require("postcss-px2rem");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          // px2rem({
          //   remUnit: 3.75, // 1rem等于多少px
          // }),
          
          pxtoviewport({
            viewportWidth: 375, // 视口宽度
            unitPrecision: 3, // 精度，小数点位数
          }),
        ],
      },
    },
  },
};
