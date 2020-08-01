<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :delComment="delComment"
      />
    </ul>
  </div>
</template>

<script>
import CommentDel from "../CommentDel";

export default {
  // 默认props属性组件不接受，如果需要接受的话，需要手动声明接受
  props: {
    // 要声明接受的属性
    // key 接受的属性 comments
    // value 接受的属性值的类型 Array
    // 组件实例对象上就会添加一个属性comments，值为父组件传递过来的值
    comments: Array,
    delComment: Function,
  },
  components: {
    CommentDel,
  },
  // mounted() {
  //   console.log(this);
  // },
};
</script>

<style scoped></style>
