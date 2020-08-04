<template>
  <div>
    <p>
      clicked: {{ count }} times, count is
      {{ oddOrEven }}
    </p>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- 
      如果action中只有调用commit方法，就应该直接更新
      如果action中需要做一些其他事（发送ajax请求..），就应该间接更新
     -->
    <!-- 调用mutation函数，直接更新 -->
    <button @click="INCREMENT(number)">+</button>
    <button @click="DECREMENT(number)">-</button>
    <!-- 调用action函数，间接更新 -->
    <button @click="incrementIfOdd(number)">increment if odd</button>
    <button @click="incrementAsync(number)">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    /*
      mapState(['count', 'xxx']) 返回值是一个对象
        {
          count: function () {
            // 实际上去vuex中找
            return this.$store.state.count;
          },
          xxx: function () {
            return this.$store.state.xxx;
          }
        }
      ...mapState(['count']) 会将对象展开，作为属性添加到computed中

      作用：将vuex中的state映射成组件的计算属性
            最终：使用起来就会简单点
    */

    // 将vuex中的state映射成组件的计算属性，通过this直接使用
    ...mapState(["count"]),
    // 将vuex中的getters映射成组件的计算属性，通过this直接使用
    ...mapGetters(["oddOrEven"]),
  },
  methods: {
    // 将vuex中的action映射成组件的方法，通过this直接使用
    ...mapActions([
      // "increment",
      // "decrement",
      "incrementIfOdd",
      "incrementAsync",
    ]),
    ...mapMutations(["INCREMENT", "DECREMENT"]),

    // increment() {
    //   // 更新vuex，先要触发actions
    //   // actions会自动触发mutations
    //   // mutations会更新数据
    //   // this.$store.dispatch(type, data)
    //   // type 是action函数名称，data传给action函数的数据
    //   this.$store.dispatch("increment", this.number);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", this.number);
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd", this.number);
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync", this.number);
    // },
  },
};
</script>

<style scoped></style>
