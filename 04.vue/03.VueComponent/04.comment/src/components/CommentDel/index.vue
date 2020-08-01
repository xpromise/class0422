<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.name }}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  // 声明接受props
  props: ["comment", "delComment"],
  methods: {
    del() {
      const { name, id } = this.comment;
      // confirm()会弹出一个弹框
      // 确认按钮（点击确认返回值true）和取消按钮（点击取消返回值false）
      if (!confirm(`您确认要删除${name}的评论吗？`)) return;
      
      this.delComment(id);
    },
  },
};
</script>

<style scoped></style>
