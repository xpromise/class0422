<template>
  <div>
    <p v-if="isLoading">loading...</p>
    <h1 v-else>
      Most Star repo is <a :href="repo.url">{{ repo.name }}</a>
    </h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repo: {},
      isLoading: false,
    };
  },
  created() {
    // 请求之前更新成loading
    this.isLoading = true;
    // 发送请求、设置定时器等一次性任务
    axios
      .get("http://localhost:9527/api")
      .then((res) => {
        console.log(res.data); // 才是响应数据
        // 请求成功
        // res成功的结果
        this.isLoading = false;
        if (res.data.code === 10000) {
          // 功能成功
          this.repo = res.data.data;
        } else {
          // 功能失败
          alert("请求失败了~");
        }
      })
      .catch((err) => {
        // err失败的原因
        this.isLoading = false;
        console.log(err);
        alert("请求失败了~");
      });
  },
  // mounted() {
  //   // 绑定事件等一次性任务
  // }
};
</script>

<style scoped></style>
