<template>
  <div>
    child
  </div>
</template>

<script>
export default {
  name: "Child",
  // props声明接受了name
  // 还有一个属性age在$attrs上
  props: ["name"],
  created() {
    console.log(this);
  },
  inheritAttrs: false, // 不会显示$attrs的属性
};
</script>

<style scoped></style>
