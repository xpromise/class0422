<template>
  <div>
    <p>clicked: {{ $store.state.count }} times, count is {{ $store.getters.oddOrEven }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // 更新vuex，先要触发actions
      // actions会自动触发mutations
      // mutations会更新数据
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style scoped></style>
