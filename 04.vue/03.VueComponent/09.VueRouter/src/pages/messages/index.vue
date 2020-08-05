<template>
  <div>
    messages....
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/messages/detail/${message.id}`">{{
          message.content
        }}</router-link>
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
