# day02复习
## 指令
v-model 用来实现双向数据绑定
  注意：只能用于表单项元素（如：input、textarea、select...）
v-bind 用来实现单向数据绑定
  简写 :
v-on 用来绑定事件监听
  简写 @

  @click="handleClick"  接受event参数
  @click="handleClick(1, 2, 3)" 接受n个参数
  @click="handleClick(1, 2, $event)" 

  修饰符
    .prevent 禁止事件默认行为
    .stop 阻止冒泡

    @keyup.13 
    @keyup.enter

v-if / v-else-if / v-else 用来切换元素显示/隐藏
  特点：隐藏的话会从DOM树种移除元素
v-show 用来切换元素显示/隐藏
  特点：隐藏的话会通过display:none隐藏元素
  频繁切换用v-show, 反之v-if
v-for 用来遍历
  既能遍历对象 也能遍历数组  
  注意：遍历的元素要添加一个唯一的key属性