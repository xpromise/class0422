<template>
  <div>
    <!-- 
      显示A组件内部的标签
      slot相当于在使用A组件里面标签内容 h1
    -->
    <slot></slot>
    <p>AAAAAAAAAAA</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
