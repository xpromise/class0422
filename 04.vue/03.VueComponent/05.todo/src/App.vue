<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <!-- 通过props标签属性，给TodoList传递数据 -->
      <TodoList :todos="todos"/>
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      todos: [
        { id: 1, content: '唱' },
        { id: 2, content: '跳' },
        { id: 3, content: 'rap' },
        { id: 4, content: '篮球' },
      ]
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style scoped></style>
