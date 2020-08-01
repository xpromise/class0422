<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成{{ completedNum }}</span> / 全部{{ todoLength }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["todoLength", "completedNum"],
};
</script>

<style scoped></style>
