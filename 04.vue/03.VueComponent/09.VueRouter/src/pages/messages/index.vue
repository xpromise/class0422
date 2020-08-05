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
        <router-link :to="{
          name: 'detail', // 会去路由配置找相应的name
          params: { id: message.id },
          query: {
            name: 'jack',
            age: 18
          }
        }">
          {{ message.content }}
        </router-link>
      </li>
    </ul>
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
};
</script>

<style scoped></style>
