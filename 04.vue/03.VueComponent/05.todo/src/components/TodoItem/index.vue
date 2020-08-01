<template>
  <!-- 
    鼠标移入移出
      mouseenter mouseleave 好用
      mouseover mouseout
  -->
  <li
    :class="{ 'item-bg': isShow }"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDel">
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: ["todo", "delTodo", "updateTodo"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleDel() {
      const { id, content } = this.todo;
      if (!confirm(`您确认要删除  ${content}  待办事项吗？`)) return;
      this.delTodo(id);
    },
  },
  computed: {
    isCheck: {
      get() {
        return this.todo.isCheck;
      },
      set(val) {
        // 调用App组件方法的修改
        this.updateTodo(this.todo.id, val);
      },
    },
  },
};
</script>

<style scoped>
.item-bg {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
