module.exports = {
  parserOptions: {
    ecmaVersion: 6, // ES6
    sourceType: "module", // ES6模块化
  },
  env: {
    browser: true, // 支持浏览器端环境（支持全局变量）
  },
  // extends: "eslint:recommended", // 启动eslint默认配置
  // https://www.npmjs.com/package/eslint-config-airbnb-base
  // 下载：npx install-peerdeps --dev eslint-config-airbnb-base
  extends: "airbnb-base", 
  rules: { // 添加额外的规则
    // semi: "error",
    // semi: "warn",
    // semi: "off",
    // "no-var": "error",
    // eqeqeq: "warn", // ===
  },
};
