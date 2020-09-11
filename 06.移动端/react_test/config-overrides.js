const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require("customize-cra");

// customize-cra react-app-rewired

module.exports = override(
  // 按需加载 - antd-mobile的样式
  // babel-plugin-import
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  // px2rem
  // postcss-px2rem
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 3.75 })])
);
