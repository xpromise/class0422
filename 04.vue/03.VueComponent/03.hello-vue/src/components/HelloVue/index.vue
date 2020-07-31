<template>
  <h2 @click="handleClick" class="title common">{{ title }}</h2>
</template>

<script>
export default {
  data() {
    return {
      title: "hello vue~~~",
    };
  },
  methods: {
    handleClick() {
      console.log("handleClick()");
    },
  },
};
</script>

<style scoped>
/* scoped 让样式只在当前组件生效 */
.title {
  color: blue;
}
</style>
