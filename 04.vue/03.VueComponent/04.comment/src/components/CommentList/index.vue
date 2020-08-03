<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import CommentDel from "../CommentDel";

export default {
  data() {
    return {
      comments: [
        { id: 1, name: "liuyuan", content: "i like fbb" },
        { id: 2, name: "fbb", content: "i like lichen" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id)
    }
  },
  mounted() {
    // 绑定事件：更新数据
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("delComment", this.delComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
    this.$bus.$off("delComment", this.delComment);
  },
  components: {
    CommentDel,
  },
};
</script>

<style scoped></style>
