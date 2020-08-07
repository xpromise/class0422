<template>
  <div>
    <h1>home....</h1>
    <ul>
      <li><router-link to="/home/news">news</router-link></li>
      <li>
        <router-link to="/home/messages">messages</router-link>
      </li>
    </ul>
    <!-- 显示路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home', // 给组件取名字
  props: ['sex'],
  created() {
    console.log("home created");
  },
  beforeDestroy() {
    console.log('home beforeDestroy');
  }
};
</script>

<style scoped></style>
