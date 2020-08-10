import Vue from "vue";
import { Button, Carousel, CarouselItem, Message } from "element-ui";
// 手动引入样式
// import "element-ui/lib/theme-chalk/index.css";

// 应用插件
// 全局注册所有组件, 扩展方法
// Vue.use(ElementUI);

/*
  按需加载：
    1. 下载 
    npm install babel-plugin-component @babel/preset-env -D
    2. 配置webpack
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules 不编译
        loader: "babel-loader",
        options: {
          // elementUI按需加载
          "presets": ["@babel/preset-env"],
          "plugins": [
            [
              "component",
              {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
              }
            ]
          ]
        }
      },
      {
        loader: 'file-loader', 
        // 只处理字体图标 .ttf .woff  
        exclude: /\.(css|js|vue|html|jpe?g|png|gif|webp)$/
      }
    3. 使用
    4. 作用：
      按需加载：按需加载样式
*/

// 全局注册部分组件（用什么组件，就注册什么组件）
// Vue.component(Button.name, Button);
// Vue.component(Carousel.name, Carousel);

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);

// 扩展方法
Vue.prototype.$message = Message;

