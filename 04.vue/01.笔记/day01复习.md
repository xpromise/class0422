# day01复习

## Vue
- 概念：渐进式JS框架
  - 渐进式
    - 自底向外增量开发
- 作用：用来构建用户界面

## new Vue(配置对象)
1. el 元素
获取DOM元素（document.querySelector）

vm.$mount('#app')

2. data 数据
用来保存模板页面需要使用动态数据（一般数据/非函数数据）

3. methods 方法
用来保存模板页面需要使用函数数据

4. computed 计算属性
用来保存需要计算的属性
如果有一个属性，需要根据其他属性（data中属性）来计算生成

5. watch 监视属性
监视属性（data中的属性）的变化
如果有一个属性发生变化，需要做一些特殊操作（发送请求，保存数据...）
注意：先要定义data中的属性才能监视

## 模板
1. 模板页面 HTML + CSS + JS
2. 模板语法（只出现HTML中）
  - 插值语法（双大括号表达式） {{JS表达式}}
    用来动态展示JS中的数据
    注意：只能用来标签内部，不能作为标签属性
  - 指令语法
      作为元素标签属性使用
    v-model 用来实现双向数据绑定
      注意：只能用于表单项元素（如：input、textarea、select...）
    v-bind 用来实现单向数据绑定
      简写 :
    v-on 用来绑定事件监听
      简写 @
    v-if / v-else-if / v-else 用来切换元素显示/隐藏
      特点：隐藏的话会从DOM树种移除元素
    v-show 用来切换元素显示/隐藏
      特点：隐藏的话会通过display:none隐藏元素
      频繁切换用v-show, 反之v-if

## 样式处理
如果样式是静态的，就直接写死，只有将来样式会发生动态变化，才会使用下面方案
1. class
- string  :class="color"
- obj   :class="{a: isShow, b: !isShow}"
- array :class="['red', green]"
2. style
:style="{fontSize: '30px', color: color}"
注意：采用小驼峰命名法

## 双向数据绑定
1. 数据可以由Model（js）流向View（模板页面）
2. 当用户输入数据时，数据可以View（模板页面）流向Model（js）

## MVVM
- M Model 数据层
- V View 视图层
- VM ViewModel 视图数据层
  - 通过绑定事件监听和数据绑定的方式来实现双向数据绑定
  - 绑定事件监听：V --> M
  - 数据绑定: M --> V