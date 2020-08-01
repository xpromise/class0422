<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
import TodoItem from "../TodoItem";

export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
};
</script>

<style scoped></style>
