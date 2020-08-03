<template>
  <div>
    child...
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      // 手动触发addPerson自定义事件
      this.$bus.$emit("addPerson", { id: Date.now(), name: "rose" });
    },
  },
};
</script>

<style scoped></style>
