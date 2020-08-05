<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 
            <router-link></router-link> 用来取代 a 标签
              特点：
                1. 点击不会刷新页面，也不会发送请求
                2. 只会更新浏览器地址 path
            <router-view></router-view> 
              根据 浏览器地址 path 的变化，加载相应的组件显示
              注意：需要加载的组件要在router配置中写好
           -->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
