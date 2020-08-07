<template>
  <div>
    messages....
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- 
          给一个路由组件传参
            /home/messages/detail/1?name=jack&age=18
              params参数 1
                this.$route.params
              query参数 ?name=jack&age=18
                this.$route.query

              第二种写法：
                :to="{
                  name: 'detail', // 会去路由配置找相应的name
                  params: { id: message.id },
                  query: {
                    name: 'jack',
                    age: 18
                  }
                }"
                组件内部使用：this.$route

              将其变成props方式：
                props: function(route) {
                  console.log("router", route); // $route
                  // 返回值对象，对象里面的数据就会以props方式传递到当前组件中
                  return {
                    ...route.params,
                    ...route.query
                  };
                }
          
          给多个路由组件传相同参
            props 
                将来router-view显示哪个组件，就给哪个组件传参
              <router-view :xxx="xxx"></router-view>
                组件内部需要声明接受props
                使用：this.xxx

         -->
        <!-- <router-link :to="`/home/messages/detail/${message.id}?name=jack&age=18`"> -->
        <!-- 
          前端路由切换浏览器地址有两种方式：
            1. 路由导航链接 router-link
            2. 编程式导航链接 this.$router.push(path)
            如果只需要切换地址，一般用router-link
            如果需要切换地址，还需要做一些其他操作（发送请求，保存数据等），就用第二种方式
         -->
        <router-link
          :to="{
            name: 'detail', // 会去路由配置找相应的name
            params: { id: message.id },
            query: {
              name: 'jack',
              age: 18,
            },
          }"
        >
          {{ message.content }}
        </router-link>
        <button @click="push(message.id)">push</button>
        <button @click="$router.replace(`/home/messages/detail/${message.id}`)">
          replace
        </button>
      </li>
    </ul>
    <button @click="$router.back()">back</button>
    <button @click="$router.forward()">forward</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    setTimeout(() => {
      // 模拟请求的结果
      const messages = [
        { id: 1, content: "message001" },
        { id: 3, content: "message003" },
        { id: 5, content: "message005" },
      ];
      // 必须修改data中数据才能更新
      this.messages = messages;
    }, 1000);
  },
  methods: {
    push(id) {
      /*
        new Vue({router}) 注入router，所有组件实例对象就有两个属性
          this.$route 包含当前路由路径的配置（动态的，路径发生变化就变化）
          this.$router 包含操作浏览器历史记录的方法
            this.$router.push(path) 添加一条浏览器历史记录
            this.$router.replace(path) 替换一条浏览器历史记录
            this.$router.back() 回退，回到上一个浏览历史记录（如果无，就不变）
            this.$router.forward() 前进，去下一条浏览历史记录（如果无，就不变）
      */
      // console.log(this.$route);
      // console.log(this.$router);
      this.$router.push(`/home/messages/detail/${id}`);
    },
  },
};
</script>

<style scoped></style>
