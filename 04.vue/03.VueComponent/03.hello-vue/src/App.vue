<template>
  <!-- 
    定义Vue的组件：1. 组件名称采用大驼峰命名法 2. 后缀名 .vue
    默认情况下，都有一个应用主组件：App.vue
      是最大的，最外层组件

    组件内部有三个代码块
      template：html代码
        注意：必须有且只有一个根标签
      script：js代码
      style：css代码
   -->
  <div>
    <h1 class="title common">{{ title }}</h1>
    <HelloVue />
    <HelloVue></HelloVue>
    <Hello-Vue></Hello-Vue>
    <hello-vue></hello-vue>
    <hello-vue />
  </div>
</template>

<script>
// 默认暴露出去一个组件配置对象(data/methods/filters/computed/watch...)
export default {
  data() {
    // data必须用函数形式
    return {
      title: "hello vue",
    };
  },
};
</script>

<style scoped>
/* 
  全局样式，所有组件都生效 
  问题：如果其他组件有相同的样式，就会覆盖
  解决：scoped
    让样式只在当前组件生效
*/
.title {
  color: green;
}
</style>
