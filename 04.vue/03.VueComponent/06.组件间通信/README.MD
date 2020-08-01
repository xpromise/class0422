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
  1. 父组件 在子组件标签定义属性和值
    <CommentList :comments="comments"/>
    
  2. 子组件声明接受props
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
    
  3. 子组件实例对象上就会添加相应的属性，就可以通过this使用了