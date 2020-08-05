<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />
      <button @click="handleSearch">Search</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    ...mapActions(['search']),
    handleSearch() {
      const searchName = this.searchName.trim();
      if (!searchName) {
        alert("请输入要搜索的内容~");
        return;
      }
      // 触发action函数
      this.search(searchName);
    },
  },
};
</script>

<style scoped></style>
