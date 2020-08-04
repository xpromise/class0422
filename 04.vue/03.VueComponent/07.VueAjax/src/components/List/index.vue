<template>
  <div>
    <h1 v-if="isFirstView">请输入要搜索的内容</h1>
    <h1 v-else-if="isLoading">loading...</h1>
    <div class="row" v-else-if="users">
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <p v-else>{{error}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isFirstView: true,
      isLoading: false,
      users: null,
      error: "",
    };
  },
  methods: {
    search(searchName) {
      // console.log(searchName);
      // 发送请求之前，先要切换成loading
      this.isFirstView = false;
      this.isLoading = true;
      // 发送ajax请求
      axios
        .get(`http://localhost:9527/api?q=${searchName}`)
        .then((res) => {
          this.isLoading = false;
          this.users = res.data.items;
        })
        .catch((err) => {
          this.isLoading = false;
          this.users = null;
          this.error = "网络出现故障...";
        });
    },
  },
  mounted() {
    this.$bus.$on("search", this.search);
  },
  beforeDestroy() {
    this.$bus.$off("search", this.search);
  },
};
</script>

<style scoped></style>
