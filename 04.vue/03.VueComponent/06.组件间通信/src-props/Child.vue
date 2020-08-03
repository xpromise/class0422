<template>
  <div>
    child...
  </div>
</template>

<script>
export default {
  // props: ["person"],
  // props: {
  //   person: Object
  // },
  props: {
    person: {
      // 必选属性
      type: Object, // 值的类型是对象
      required: true, // 必须的
    },
    name: {
      // 可选属性
      type: String,
      default: "tom", // 默认值
    },
    age: {
      type: Number,
      required: true,
      // 检查属性的函数
      // val就是属性的值
      validator(val) {
        console.log("validator()", val);
        return val > 18;
        // return true; // 返回true代表校验通过
        // return false; // 返回false代表校验失败，就会报错
      },
    },
  },
  mounted() {
    console.log(this.person);
    console.log(this.name);
  },
};
</script>

<style scoped></style>
