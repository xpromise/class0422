<template>
  <ul class="todo-main">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :delTodo="delTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "../TodoItem";

export default {
  props: ["todos", "delTodo"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped></style>
