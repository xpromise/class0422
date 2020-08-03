<template>
  <!-- 
    submit事件 
    1. 按钮的type类型是submit
    2. 点击按钮就会触发form表单的submit事件
  -->
  <form class="form-horizontal" @submit.prevent="submit">
    <div class="form-group">
      <label>用户名</label>
      <input
        type="text"
        class="form-control"
        placeholder="用户名"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <label>评论内容</label>
      <textarea
        class="form-control"
        rows="6"
        placeholder="评论内容"
        v-model="content"
      ></textarea>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default pull-right">
          提交
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["addComment"],
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    submit() {
      // const { name, content } = this;
      const name = this.name.trim();
      const content = this.content.trim();

      if (!name) {
        // 如果name没有值（空串），就会进来
        alert("请输入用户名~");
        return;
      }

      if (!content) {
        alert("请输入评论内容~");
        return;
      }

      // 添加评论
      // 要往App中的comments数据添加一条评论
      // 数据就会更新 --> 用户界面就会更新 --> 更新时就会获取最新的数据去渲染
      this.addComment({
        name,
        content,
      });

      // 清空数据
      this.name = '';
      this.content = '';
    },
  },
};
</script>

<style scoped></style>
