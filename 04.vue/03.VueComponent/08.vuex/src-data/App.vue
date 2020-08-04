<template>
  <div>
    <p>clicked: {{ count }} times, count is {{ oddOrEven }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementIfOdd() {
      // if (this.count % 2 === 0) return;
      // 位运算
      if ((this.count & 1) === 0) return;
      this.count++;
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
  computed: {
    oddOrEven() {
      return (this.count & 1) === 0 ? "偶数" : "奇数";
    },
  },
};
</script>

<style scoped></style>
