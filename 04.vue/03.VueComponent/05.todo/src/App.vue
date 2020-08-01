<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <!-- 通过props标签属性，给TodoList传递数据 -->
      <TodoList :todos="todos" :delTodo="delTodo"/>
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
        { id: 1, content: "唱" },
        { id: 2, content: "跳" },
        { id: 3, content: "rap" },
        { id: 4, content: "篮球" },
      ],
      id: 5,
    };
  },
  methods: {
    addTodo(todo) {
      // ...todo 会展开todo数据，将里面的key/value添加到新对象中
      this.todos.unshift({ id: this.id++, ...todo });
    },
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
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
