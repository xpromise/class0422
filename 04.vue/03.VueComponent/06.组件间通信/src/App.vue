<template>
  <div>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
    <A />
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import A from "./A";

export default {
  data() {
    return {
      persons: [{ id: 1, name: "jack" }],
    };
  },
  methods:{
    addPerson(msg, person) {
      console.log(msg, person); // msg是消息名称  person是数据
      this.persons.unshift(person);
    }
  },
  mounted() {
    // 订阅消息（绑定事件）$on
    PubSub.subscribe('addPerson', this.addPerson);
  },
  beforeDestroy() {
    // 取消订阅（解绑事件）$off
    PubSub.unsubscribe('addPerson');
  },
  components: {
    A,
  },
};
</script>

<style scoped></style>
