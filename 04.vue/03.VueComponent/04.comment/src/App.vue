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
        <CommentAdd />
      </div>
      <div class="col-md-8">
        <CommentList />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import CommentAdd from "./components/CommentAdd";
import CommentList from "./components/CommentList";

export default {
  // 注册局部组件
  components: {
    CommentAdd,
    CommentList,
  },
};
</script>

<style scoped></style>
