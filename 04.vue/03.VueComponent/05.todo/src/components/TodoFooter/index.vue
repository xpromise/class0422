<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{ completedNum }}</span> / 全部{{ todoLength }}
    </span>
    <button class="btn btn-danger" v-show="!!completedNum" @click="handleDel">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: ["todoLength", "completedNum", "updateAllTodo", "delCompletedTodos"],
  methods: {
    handleDel() {
      if (!confirm(`您确认要删除已完成待办事项吗`)) return;
      this.delCompletedTodos();
    },
  },
  computed: {
    isCheckAll: {
      get() {
        return this.todoLength !== 0 && this.completedNum === this.todoLength;
      },
      set(val) {
        this.updateAllTodo(val);
      },
    },
  },
};
</script>

<style scoped></style>
