<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <!-- 通过props标签属性，给TodoList传递数据 -->
      <TodoList :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <TodoFooter
        :todoLength="todos.length"
        :completedNum="completedNum"
        :updateAllTodo="updateAllTodo"
        :delCompletedTodos="delCompletedTodos"
      />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    // 对todos进行初始化
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    return {
      todos,
    };
  },
  methods: {
    addTodo(todo) {
      // ...todo 会展开todo数据，将里面的key/value添加到新对象中
      this.todos.unshift({ id: Date.now(), isCheck: false, ...todo });
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
    updateAllTodo(isCheck) {
      this.todos = this.todos.map((todo) => ({ ...todo, isCheck }));
    },
    delCompletedTodos() {
      this.todos = this.todos.filter((todo) => !todo.isCheck);
    },
  },
  /*
    computed计算属性：不能做异步操作
    watch监视属性：可以做异步操作
  */
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
  watch: {
    // 存储/发送请求...
    todos(newValue) {
      // 存在localStorage
      localStorage.setItem("todos", JSON.stringify(newValue));
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
