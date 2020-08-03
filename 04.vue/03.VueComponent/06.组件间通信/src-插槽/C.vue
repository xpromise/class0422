<template>
  <div>
    <!-- 
      给slot强制绑定num数据      
     -->
    <slot name="title" :num="num"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 123,
    };
  },
};
</script>

<style scoped></style>
