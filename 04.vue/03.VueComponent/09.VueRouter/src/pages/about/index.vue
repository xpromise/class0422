<template>
  <div>
    about...
  </div>
</template>

<script>
export default {
  name: "about",
  props: ["sex"],
  created() {
    console.log("about created");
  },
  beforeDestroy() {
    console.log("about beforeDestroy");
  },
};
</script>

<style scoped></style>
