<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel />
      <CommentDel />
      <CommentDel />
    </ul>
  </div>
</template>

<script>
import CommentDel from "../CommentDel";

export default {
  components: {
    CommentDel,
  },
};
</script>

<style scoped></style>
