<template>
  <div>
    <header>
      <!-- 使用名称为header -->
      <slot name="header"></slot>
      <p>11111</p>
    </header>

    <div>
      <!-- 使用默认default -->
      <slot></slot>
      <p>22222</p>
    </div>

    <footer>
      <slot name="footer"></slot>
      <p>33333</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
