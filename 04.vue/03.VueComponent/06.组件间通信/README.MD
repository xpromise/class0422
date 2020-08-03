# 组件的通信

1. 传递的数据是只读不修改
2. 数据源在哪，更新数据的方法就定义在哪，谁要用就把更新方法传给谁

## props

1. 适用于父子组件通信
   父 --> 子
   传递非函数数据，子组件直接使用
   子 --> 父
   父给子传递函数数据，子组件调用函数传递数据，父组件就能接收到了
2. 用法：
3. 父组件 在子组件标签定义属性和值
   <CommentList :comments="comments"/>

4. 子组件声明接受 props
   props: ["comment"],


    props: {
      comments: Array
    },

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
    }

3. 子组件实例对象上就会添加相应的属性，就可以通过 this 使用了

## 自定义事件

适用场景：子组件向父组件通信

1. 绑定自定义事件

<Child @addPerson="addPerson"/>

或

<Child ref="child"/>
mounted() {
  // 绑定事件
  this.$refs.child.$on('addPerson', this.addPerson);
},
beforeDestroy() {
  // 解绑事件
  this.$refs.child.$off('addPerson', this.addPerson);
},

2. 触发自定义事件

this.\$emit('addPerson', xxx)

3. 自定义事件 API

- xxx.\$on(事件名称, 事件回调函数); 绑定持续性事件
- xxx.\$once(事件名称, 事件回调函数); 绑定一次性事件
- xxx.\$emit(事件名称, ...args); 触发事件
- xxx.\$off(事件名称, 事件回调函数); 解绑事件

4. 特点
   给 A 组件绑定自定义事件，就只有 A 组件可以触发，其他组件不行
   所以只能父子组件通信，默认不能跨层级通信

## 总结组件间通信

组件关系：父子 / 祖孙 / 兄弟

1. props
   适用于父子组件通信
   父 --> 子 传递一般数据
   子 --> 父 传递函数数据

- 使用
  - 父组件通过标签属性传递动态数据 <A :xxx="xxx" />
  - 子组件需要声明接受属性（三种方式）
  - 子组件通过 this 直接访问使用
- 注意：数据只读不修改

2. 自定义事件
   适用于子 --> 父通信（一般不用）

3. 全局事件总线（自定义事件加强版）
   适用于祖孙 / 兄弟组件通信

- 使用
  - 首先将全局事件总线对象（vm）定义到 Vue 的原型对象上
    - 为了所有实例对象都能够使用
    ```
    new Vue({
      beforeCreate() {
        Vue.prototype.$bus = this;
      }
    })
    ```
  - 接受数据方：绑定自定义事件
  ```
  mounted() {
    this.$bus.$on(eventName, callback);
  },
  beforeDestroy() {
    // 注意 callback 必须和绑定事件的 callback 一致
    this.$bus.$off(eventName, callback);
  }
  ```
  - 发送数据方：触发自定义事件
  ```
  this.$bus.$emit(eventName, arg1, arg2...)
  ```

4. pubsub 消息订阅发布机制（本质上就是自定义事件）
   适用于祖孙 / 兄弟组件通信（一般不用）

5. 插槽
   适用于父子组件通信
   前面 4 种手段都是通信动态数据
   而插槽通信是带动态数据的标签

父 --> 子 通信是带动态数据的标签
子 --> 父 通信是动态数据

- 默认插槽

```
父组件 A：
<B>
  <!-- h1就是要传给子组件B的内容 -->
  <h1>{{title}}</h1>
</B>
子组件 B：
<!-- 使用父组件传递过来的标签数据 -->
<slot></slot>
```

- 命名插槽 / 具名插槽

```
父组件 A：
<B>
  <template slot="header">
    <h1>{{title}}</h1>
  </template>

  <template v-slot:header>
    <h1>{{title}}</h1>
  </template>

  <template #header>
    <h1>{{title}}</h1>
  </template>
</B>
子组件 B：
<slot name="header"></slot>
```

- 作用域插槽

```
父组件 A：
<B>
  <template v-slot:header="slotProps">
    <h1>{{title}}</h1>
    <p>{{slotProps.num}}</p>
  </template>

  <template #header="{ num }">
    <h1>{{title}}</h1>
    <p>{{num}}</p>
  </template>
</B>
子组件 B：
<slot name="header" :num="num"></slot>
```
6. vuex(将来学~)