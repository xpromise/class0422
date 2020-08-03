<template>
  <div>
    <h1 ref="title">hello App</h1>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
    <!-- 
      需求：Child组件点击按钮更新App组件的数据
      给Child绑定自定义事件 
        Child内部就有addPerson事件
        在Child内部触发 addPerson 事件，同时传递person数据
    -->
    <!-- <Child @addPerson="addPerson"/> -->

    <!-- 
      ref
        给普通html标签绑定ref，最终获取真实DOM元素
        给组件标签绑定ref，最终获取组件实例对象
     -->
    <Child ref="child"/>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  data() {
    return {
      persons: [{ id: 1, name: "jack" }],
    };
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
    }
  },
  mounted() {
    // 绑定事件
    // 组件渲染/挂载完毕触发
    // console.log(this.$refs);
    // 给 this.$refs.child（child组件实例对象） 绑定自定义事件
    this.$refs.child.$on('addPerson', this.addPerson);
  },
  beforeDestroy() {
    // 解绑事件
    this.$refs.child.$off('addPerson', this.addPerson);
  },
  components: {
    Child,
  },
};
</script>

<style scoped></style>
