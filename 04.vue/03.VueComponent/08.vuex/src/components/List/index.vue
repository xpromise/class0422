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
    <p v-else>{{ error }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isFirstView", "isLoading", "users", "error"]),
  },
};
</script>

<style scoped></style>
