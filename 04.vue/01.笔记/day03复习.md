# day03 复习

## 过渡&动画

transition 组件来给显示&隐藏(v-if/v-show)元素一个过渡或动画效果

1. 过渡 transition
2. 动画 animation

- 显示 - 隐藏（leave）

  - v-leave
  - v-leave-active
  - v-leave-to

- 隐藏 - 显示(enter)
  - v-enter
  - v-enter-active
  - v-enter-to

可以通过 <transition name="fade"></transition> 来修改类名的前缀

## 过滤器

1. 作用：用来格式化文本/时间数据

2. 注册过滤器

- 全局过滤器（所有组件都能使用）
  - Vue.filter(名称, function (value, ...args) {})
- 局部过滤器（只有当前组件能够使用）
  - new Vue({ filters: { 名称: function (value, ...args) {} } })

3. 使用过滤器
   `{{ nowTime | 过滤器名称 }}`

## 指令

1. v-if : 如果为 true, 当前标签才会输出到页面
2. v-else: 如果为 false, 当前标签才会输出到页面
3. v-show : 通过控制 display 样式来控制显示/隐藏
4. v-for : 遍历数组/对象
5. v-on : 绑定事件监听, 一般简写为@
   @click.once="handleClick"
6. v-bind : 强制绑定解析表达式, 可以省略 v-bind
   简写 :
7. v-model : 双向数据绑定
8. v-text : 更新元素的 textContent(相当于 innerText)
9. v-html : 更新元素的 innerHTML
10. v-once : 元素只会渲染一次，后续渲染无效（性能优化）
11. v-cloak : 防止闪现表达式, 与 css 配合: [v-cloak] { display: none }

- 自定义指令
  - 全局指令
    Vue.directive('指令名称', function (el, binding) {})
    el 绑定指令的 DOM 元素
    binding 指令的所有信息
  - 局部指令
    new Vue({ directives: { 指令名称: function (el, binding) {}) } })

## Vue 插件

1. 扩展 Vue 的功能

2. 定义插件

- 定义插件文件 xxx.js
- function xxx(Vue) { 扩展 Vue 功能 }

3. 使用/注册插件
   Vue.use(插件)
   注意：必须先注册插件，在 new Vue()

## key

1. 在哪里使用
   v-for 遍历的时候，遍历的每一项元素需要添加一个唯一的 key 属性
2. 使用时注意
   key 的值能用 id 用 id
   什么时候能用 index?
   1. 没有 id
   2. 是往数组后面添加/删除

## 组件

- 什么是组件
  包含特定用户界面功能的代码（HTML+CSS+JS）

- 什么是模块
  只有 JS

将来开发都是基于组件开发，如果多个组件中有公共的 JS 代码，就提取封装成一个 JS 模块，组件中在引入模块使用

- 使用
  - 定义组件构造函数
    const VueComponent = Vue.extend({组件配置对象})
  - 注册组件
    - 全局组件
      Vue.component(组件名称, 组件构造函数)
    - 局部组件
      new Vue({ components: { 组件名称: 组件构造函数 } })
  - 以上两步可以简写
    - 全局组件
      Vue.component(组件名称, 组件配置对象)
    - 局部组件
      new Vue({ components: { 组件名称: 组件配置对象 } })
  - 使用组件
    `<组件名称></组件名称>`
    `<组件名称 />`
