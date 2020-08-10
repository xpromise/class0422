<template>
  <div>
    <van-button>默认按钮</van-button>
    <van-button type="primary" @click="handleClick">成功按钮</van-button>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$notify({
        message: "自定义颜色",
        color: "green",
        background: "pink",
        duration: 3000,
      });
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
