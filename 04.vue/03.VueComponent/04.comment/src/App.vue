<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="col-md-4">
        <!-- 使用组件 -->
        <CommentAdd :addComment="addComment" />
      </div>
      <div class="col-md-8">
        <!-- 
          使用props(标签属性)方案，父组件给子组件传递动态数据 
          comments="comments" 只会当做普通字符串解析
          :comments="comments" comments就会去组件实例对象上找comments
        -->
        <CommentList :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import CommentAdd from "./components/CommentAdd";
import CommentList from "./components/CommentList";

export default {
  data() {
    return {
      comments: [
        { id: 1, name: "liuyuan", content: "i like zly" },
        { id: 2, name: "zly", content: "i like fsf" },
      ],
      id: 3,
    };
  },
  methods: {
    addComment({ name, content }) {
      // 更新数据
      // this.comments.unshift({
      //   id,
      //   name: comment.name,
      //   content: comment.content,
      // });
      this.comments.unshift({
        id: this.id++,
        name,
        content,
      });
    },
  },
  // 注册局部组件
  components: {
    CommentAdd,
    CommentList,
  },
};
</script>

<style scoped></style>
