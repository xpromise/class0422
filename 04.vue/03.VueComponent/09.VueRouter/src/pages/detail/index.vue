<template>
  <ul>
    <li>id: {{ detail.id }}</li>
    <li>title: {{ detail.title }}</li>
    <li>content: {{ detail.content }}</li>
  </ul>
</template>

<script>
export default {
  props: ["sex", "id", "name", "age"],
  data() {
    return {
      detail: {},
    };
  },
  created() {
    console.log("created");
    console.log("detail", this);
    setTimeout(() => {
      // 模拟请求的结果
      const messages = [
        { id: 1, title: "message001", content: "message001 content~~" },
        { id: 3, title: "message003", content: "message003 content~~" },
        { id: 5, title: "message005", content: "message005 content~~" },
      ];
      // 如果数据涉及到页面的更新，一定定义在data中，反之就可以不用
      this.messages = messages;
      /*
        this.$route 包含当前路由组件地址信息
      */
      // 获取params参数
      console.log(this.$route.params.id);
      const id = +this.$route.params.id;
      // 去所有数据中找到指定id数据
      const detail = messages.find((message) => message.id === id);
      // 更新成data
      this.detail = detail;
    }, 1000);
  },
  // updated() {
  //   console.log("updated");
  // },
  watch: {
    $route(newValue) {
      const id = +newValue.params.id;
      const detail = this.messages.find((message) => message.id === id);
      this.detail = detail;
    },
  },

  // 相当于生命周期函数（路由生命周期）
  // beforeRouteUpdate(to, from, next) {
  //   // react to route changes...
  //   // don't forget to call next()
  //   // console.log(to, from, next);
  //   // to 下一个（当前）地址信息对象
  //   // from 上一个地址信息对象 -->
  //   const id = +to.params.id;
  //   console.log(id);
  //   const detail = this.messages.find((message) => message.id === id);
  //   this.detail = detail;
  //   // 执行下一段代码
  //   next();
  // },
};
</script>

<style scoped></style>
