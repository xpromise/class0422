const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // https://ant.design/docs/react/customize-theme-cn
              "@primary-color": "#1DA57A",
              "@success-color": "pink",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
