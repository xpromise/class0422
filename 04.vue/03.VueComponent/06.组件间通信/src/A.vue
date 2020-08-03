<template>
  <button @click="add">添加</button>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  methods: {
    add() {
      // 触发 $emit
      PubSub.publish("addPerson", { id: Date.now(), name: "rose" });
    },
  },
};
</script>

<style scoped></style>
