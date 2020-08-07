## 1. 准备
	1.[].slice.call(lis): 将伪数组转换为真数组
	2.node.nodeType: 得到节点类型
	3.Object.defineProperty(obj, propertyName, {}): 给对象添加/修改属性(指定描述符)
		configurable: true/false  是否可以重新define
		enumerable: true/false 是否可以枚举(for..in / keys())
		value: 指定初始值
		writable: true/false value是否可以修改存取(访问)描述符
		get: 函数, 用来得到当前属性值
		set: 函数, 用来监视当前属性值的变化
  	4.Object.keys(obj): 得到对象自身可枚举的属性名的数组
  	5.DocumentFragment: 文档碎片(高效批量更新多个节点)
  	6.obj.hasOwnProperty(prop): 判断prop是否是obj自身的属性

## 2. 数据代理(MVVM.js)
	1.通过一个对象代理对另一个对象中属性的操作(读/写)
  	2.通过vm对象来代理data对象中所有属性的操作
  	3.好处: 更方便的操作data中的数据
  	4.基本实现流程
    	1). 通过Object.defineProperty()给vm添加与data对象的属性对应的属性描述符
    	2). 所有添加的属性都包含getter/setter
    	3). 在getter/setter内部去操作data中对应的属性数据
    
## 3. 模板解析(compile.js)
  	1.模板解析的关键对象: compile对象
  	2.模板解析的基本流程:
    	1). 将el的所有子节点取出, 添加到一个新建的文档fragment对象中
    	2). 对fragment中的所有层次子节点递归进行编译解析处理
        	* 对表达式文本节点进行解析
        	* 对元素节点的指令属性进行解析
            	* 事件指令解析
            	* 一般指令解析
      	3). 将解析后的fragment添加到el中显示
    3.解析表达式文本节点
      	1). 根据正则对象得到匹配出的表达式字符串: 子匹配/RegExp.$1
      	2). 从data中取出表达式对应的属性值
      	3). 将属性值设置为文本节点的textContent
    4.事件指令解析
      	1). 从指令名中取出事件名
      	2). 根据指令的值(表达式)从methods中得到对应的事件处理函数对象
      	3). 给当前元素节点绑定指定事件名和回调函数的dom事件监听
      	4). 指令解析完后, 移除此指令属性
    5.一般指令解析
      	1). 得到指令名和指令值(表达式)
      	2). 从data中根据表达式得到对应的值
      	3). 根据指令名确定需要操作元素节点的什么属性
	        * v-text---textContent属性
	        * v-html---innerHTML属性
	        * v-class--class属性
      	4). 将得到的表达式的值设置到对应的属性上
      	5). 移除元素的指令属性

## 4. 数据劫持-->数据绑定
	1.数据绑定(model==>View):
    	1). 一旦更新了data中的某个属性数据, 所有界面上直接使用或间接使用了此属性的节点都会更新(更新)
  	2.数据劫持
		1). 数据劫持是vue中用来实现数据绑定的一种技术
		2). 基本思想: 通过defineProperty()来监视data中所有属性(任意层次)数据的变化, 一旦变化就去更新界面
  	3.四个重要对象
    	1). Observer
			* 用来对data所有属性数据进行劫持的构造函数
	      	* 给data中所有属性重新定义属性描述(get/set)
	      	* 为data中的每个属性创建对应的dep对象
	    2). Dep(Depend)
	      	* data中的每个属性(所有层次)都对应一个dep对象
	      	* 创建的时机:
	        	* 在初始化define data中各个属性时创建对应的dep对象
	        	* 在data中的某个属性值被设置为新的对象时
	      	* 对象的结构
		        {
		          id, // 每个dep都有一个唯一的id
		          subs //包含n个对应watcher的数组(subscribes的简写)
		        }
			* subs属性说明
				* 当一个watcher被创建时, 内部会将当前watcher对象添加到对应的dep对象的subs中
				* 当此data属性的值发生改变时, 所有subs中的watcher都会收到更新的通知, 从而最终更新对应的界面
		3). Compile
			* 用来解析模板页面的对象的构造函数(一个实例)
			* 利用compile对象解析模板页面
			* 每解析一个表达式(非事件指令)都会创建一个对应的watcher对象, 并建立watcher与dep的关系
			* complie与watcher关系: 一对多的关系
		4). Watcher
	      	* 模板中每个非事件指令或表达式都对应一个watcher对象
	      	* 监视当前表达式数据的变化
	      	* 创建的时机: 在初始化编译模板时
	      	* 对象的组成
				{
		          vm,  //vm对象
		          exp, //对应指令的表达式
		          cb, //当表达式所对应的数据发生改变的回调函数
		          value, //表达式当前的值
		          depIds //表达式中各级属性所对应的dep对象的集合对象
		                  //属性名为dep的id, 属性值为dep
				}
			
		5). 总结: dep与watcher的关系: 多对多
			* 一个data中的属性对应对应一个dep, 一个dep中可能包含多个watcher(模板中有几个表达式使用到了属性)
			* 模板中一个非事件表达式对应一个watcher, 一个watcher中可能包含多个dep(表达式中包含了几个data属性)
			* 数据绑定使用到2个核心技术
				* defineProperty()
				* 消息订阅与发布
	
	4.双向数据绑定
		1). 双向数据绑定是建立在单向数据绑定(model==>View)的基础之上的
		2). 双向数据绑定的实现流程:
	      	* 在解析v-model指令时, 给当前元素添加input监听
	      	* 当input的value发生改变时, 将最新的值赋值给当前表达式所对应的data属性