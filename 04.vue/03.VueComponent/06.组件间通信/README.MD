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

this.$emit('addPerson', xxx)


3. 自定义事件API
- xxx.$on(事件名称, 事件回调函数); 绑定持续性事件
- xxx.$once(事件名称, 事件回调函数); 绑定一次性事件
- xxx.$emit(事件名称, ...args); 触发事件
- xxx.$off(事件名称, 事件回调函数); 解绑事件

4. 特点
给A组件绑定自定义事件，就只有A组件可以触发，其他组件不行
所以只能父子组件通信，默认不能跨层级通信