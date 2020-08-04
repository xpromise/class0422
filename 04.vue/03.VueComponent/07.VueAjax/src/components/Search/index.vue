<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchName: ''
    }
  },
  methods: {
    search() {
      const searchName = this.searchName.trim();
      if (!searchName) {
        alert('请输入要搜索的内容~');
        return;
      }
      this.$bus.$emit('search', searchName);
    }
  }
};
</script>

<style scoped></style>
