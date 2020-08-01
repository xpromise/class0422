<template>
  <ul class="todo-main">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :delTodo="delTodo"
      :updateTodo="updateTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "../TodoItem";

export default {
  props: ["todos", "delTodo", 'updateTodo'],
  components: {
    TodoItem,
  },
};
</script>

<style scoped></style>
