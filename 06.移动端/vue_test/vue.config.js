const px2rem = require("postcss-px2rem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          px2rem({
            remUnit: 3.75, // 1rem等于多少px
          }),
        ],
      },
    },
  },
};
