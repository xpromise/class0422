<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>count: {{ count }}</p>
  <p>num: {{ num }}</p>
  <button @click="handleClick">按钮</button>
</template>

<script>
// https://github.com/vue3/vue3-News vue3资料仓库
// https://juejin.im/post/6844904134303301645 最近尤雨溪直播讲解Vue3的内容
import {
  ref,
  reactive,
  toRefs,
  onMounted, // 相当于 mounted
  onUpdated, // 相当于 updated
  onUnmounted, // 相当于 destroyed
} from "vue";
/**
 * Composition API 组合API
 * 提供函数式编程
 */
export default {
  name: "App",
  // 安装：组件一上来会调用的方法
  setup() {
    // setup 相当于 beforeCreate 和 created 生命周期
    // 会创建一个响应式数据，初始值为0
    // const count = ref(0);
    // const num = ref(1);
    console.log("setup()");

    onMounted(function () {
      console.log("onMounted()");
    });

    onUpdated(function () {
      console.log("onUpdated()");
    });

    // 会创建多个响应式数据
    const state = reactive({
      count: 0,
      num: 1,
    });

    const handleClick = function () {
      // count不能直接操作
      // 找到value去操作
      // count.value++;
      // num.value++

      // 使用reactive
      state.count++;
      state.num++;

      // count++;
      // num++;
    };

    // 返回值对象，对象中所有数据都会添加到实例对象上
    return {
      // count,
      // num,
      ...toRefs(state),
      // state,
      handleClick,
    };
  },
};
</script>
