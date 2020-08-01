<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
export default {
  props: ["todo"],
};
</script>

<style scoped></style>
