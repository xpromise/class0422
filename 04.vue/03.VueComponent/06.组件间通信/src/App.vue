<template>
  <div>
    <!-- 默认插槽: 只能渲染到子组件一个位置 -->
    <A>
      <!-- 此处放置要传给A组件的标签内容 -->
      <h1>{{ title }}</h1>
      <p>hello pppp</p>
    </A>

    <!-- 命名插槽/具名插槽: 可以将标签内容分别渲染到子组件不同位置 -->
    <B>
      <!-- 给当前标签取一个名称 -->
      <template slot="header">
        <h1>title BBBBB</h1>
      </template>

      <!-- 没有取名称的就是default -->
      <div>content BBBBB</div>

      <!-- <template v-slot:footer>
        <p>footer BBBBB</p>
      </template> -->

      <!-- v-slot 简写 # -->
      <template #footer>
        <p>footer BBBBB</p>
      </template>
    </B>

    <!-- 
      作用域插槽: 能够接受子组件传递过来的数据
        每一个组件都有自己的作用域，
          要渲染的数据必须在定义在当前组件中
          或者引入使用
          数据对于组件内部必须是可见的
    -->
    <C>
      <!--  
        v-slot:title="slotProps"
          v-slot 指令
          v-slot:title 给当前插槽取一个名称。叫做title
          v-slot:title="slotProps" 接受子组件slot标签传递过来的数据slotProps
            slotProps是一个对象，对象里面包含了 slot标签 的数据
      -->
      <!-- <template v-slot:title="slotProps">
        <h1>hello {{title}} {{slotProps.num}}</h1>
      </template> -->

      <!-- 简写 -->
      <!-- <template #title="slotProps">
        <h1>hello {{ title }} {{ slotProps.num }}</h1>
      </template> -->

      <!-- 
        #title="{ num }" 解构赋值语法，提取所有slot属性中的num
      -->
      <template #title="{ num }">
        <h1>hello {{ title }} {{ num }}</h1>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  data() {
    return {
      title: "title",
    };
  },
  components: {
    A,
    B,
    C,
  },
};
</script>

<style scoped></style>
