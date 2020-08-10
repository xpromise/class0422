<template>
  <div id="app">
    app
    <p v-pre>count: {{ count }}</p>
    <p>total: {{ total }}</p>
    <button @click="handleClick">按钮</button>
    <!-- 子组件通过this.$listeners -->
    <Child @xxx="handleClick" :name="person.name" :age="person.age" />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  /*
    组件命名：
      1. 可以在vue-devtool中调试查看组件名称
      2. 在 keep-alive 中缓存组件，需要组件名称
  */
  name: "App",
  /*
    定义响应式数据：
      1. 对象形式 --> 如果组件复用，复用多个组件会共享同一份数据
        一旦修改，所有都改了
      2. 函数形式 --> 每个组件都有自己的数据，互不影响
      
      注意：
        1. 不能直接给对象添加新属性 this.person.age = 18, 新添加属性不是响应式
          解决: this.$set(this.person, 'age', 18) / Vue.set(this.person, 'age', 18)
        2. 不能给数组通过下标添加新值，新下标的值不是响应式数据

      vm.$data 访问data数据
  */
  data() {
    return {
      person: { name: "jack", age: 18 },
      count: 1,
      num: 1,
    };
  },
  /*
    函数的this都指向实例对象
      注意：不要写箭头函数（定时器中往往会写箭头函数）

      vm.$option.methods
  */
  methods: {
    handleClick() {
      this.num++;
    },
  },
  /*
    声明接受属性：
      有三种写法。
    vm.$props 
  */
  props: ["name"],
  /*
    计算属性：需要一个响应式数据，需要根据其他响应式数据计算生成
      1. 只读计算属性
      2. 可读可写计算属性
      特点：有缓存的(如果计算属性相关其他属性，没有发生变化，就不会重新计算，会读取缓存)
  */
  computed: {
    // 只读计算属性
    total() {
      console.log("total");
      return this.count + 1;
    },
    // 可读可写计算属性
    // sum: {
    //   get() {},
    //   set() {},
    // },
  },
  /*
    监视属性：监视已存在响应式属性的变化
    vm.$watch
  */
  watch: {},
  /*
    局部过滤器：格式化文本/日期
      使用： 
      {{ date | filterDate('YYYY-MM-DD HH:mm:ss') }}
      {{ date | filterDate }}
    
    全局过滤器：(一般使用全局)
      Vue.filter(过滤器名称, function () {

      })
  */
  filters: {
    // filterDate(data, formatStr = "YYYY-MM-DD") {
    //   // return dayjs(data).format(formatStr)
    // },
  },

  /*
    指令：自定义指令

    定义全局指令：
    Vue.directive(指令名称, function () {})
  */
  directives: {
    upperCase(el, binding) {
      el.textContent = binding.value.toUpperCase();
    },
  },
  /*
    注册组件

    全局注册组件
    Vue.component(组件名称, 组件配置对象)
  */
  components: {
    // Home
    Child,
  },
};
</script>
