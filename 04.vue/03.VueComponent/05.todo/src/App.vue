<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <!-- 通过props标签属性，给TodoList传递数据 -->
      <TodoList :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <TodoFooter :todoLength="todos.length" :completedNum="completedNum" />
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
        { id: 1, content: "唱", isCheck: false },
        { id: 2, content: "跳", isCheck: true },
        { id: 3, content: "rap", isCheck: false },
        { id: 4, content: "篮球", isCheck: false },
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
    },
    updateTodo(id, isCheck) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          // 要更新元素
          return { ...todo, isCheck };
        }
        return todo;
      });
    },
  },
  computed: {
    // 属性get方法
    completedNum() {
      return this.todos.reduce((p, c) => {
        // p = p + +c.isCheck;
        p = p + Number(c.isCheck);
        return p;
      }, 0);
    },
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style scoped></style>
