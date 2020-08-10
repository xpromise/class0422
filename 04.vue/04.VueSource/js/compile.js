function Compile(el, vm) {
  // 将vm添加this上，目的为了将来其他函数也能获取vm
  this.$vm = vm;
  // 判断el是否是元素，如果是元素就返回这个元素，不是就获取元素然后返回
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

  // 如果元素存在，开始模板解析
  if (this.$el) {
    // 1. 将元素节点转换成文档碎片节点
    this.$fragment = this.node2Fragment(this.$el);
    // 2. 解析模板（解析插值语法和指令语法）
    this.init();
    // 3. 将模板解析后的文档碎片节点添加到el容器中生效
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  constructor: Compile,
  node2Fragment: function (el) {
    var fragment = document.createDocumentFragment(),
      child;

    // 将原生节点拷贝到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }

    return fragment;
  },

  init: function () {
    // 编译模板
    this.compileElement(this.$fragment);
  },

  compileElement: function (el) {
    // 获取当前元素所有子节点
    var childNodes = el.childNodes,
      me = this;

    // 将所有子节点转换成真数组进行遍历
    [].slice.call(childNodes).forEach(function (node) {
      // 提取当前节点的文本内容
      var text = node.textContent;
      // 定义一个用来匹配插值语法正则表达式
      var reg = /\{\{(.*)\}\}/;

      // 判断当前节点是否是元素节点
      if (me.isElementNode(node)) {
        // 编译指令语法
        me.compile(node);

        // 判断当前节点是否是文本节点并且里面文本内容是否有插值语法
      } else if (me.isTextNode(node) && reg.test(text)) {
        // 编译插值语法
        // RegExp.$1.trim() --> 插值语法中的表达式
        me.compileText(node, RegExp.$1.trim());
      }

      // 判断当前节点是否还有子节点，如果有，就递归编译所有子节点
      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node);
      }
    });
  },

  compile: function (node) {
    // 获取节点所有属性对象成一个数组  ['v-on:click']
    var nodeAttrs = node.attributes,
      me = this;

    /*
      v-on:click
        v- 用来判断是否是指令
        on 用来判断是哪个指令
          如果是事件指令
            click来决定事件类型
    */
    // 遍历
    [].slice.call(nodeAttrs).forEach(function (attr) {
      // attr 就是单个属性对象
      // attrName 属性名 v-on:click
      var attrName = attr.name;
      // 判断当前属性是否是指令属性，如果是就要解析，如果不是就啥也不管
      if (me.isDirective(attrName)) {
        // 获取属性值 --> 指令表达式 handleClick
        var exp = attr.value;
        // 截取2位得到 on:click
        var dir = attrName.substring(2);
        // 判断是否是事件指令 v-on
        if (me.isEventDirective(dir)) {
          // 事件处理
          compileUtil.eventHandler(node, me.$vm, exp, dir);
          // 普通指令 v-text v-html v-class v-model
        } else {
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
        }

        // 解析完指令后，将属性给移除掉 v-on:click
        node.removeAttribute(attrName);
      }
    });
  },

  // node 文本节点
  // exp 表达式
  compileText: function (node, exp) {
    compileUtil.text(node, this.$vm, exp);
  },

  isDirective: function (attr) {
    return attr.indexOf("v-") == 0;
  },

  isEventDirective: function (dir) {
    return dir.indexOf("on") === 0;
  },

  isElementNode: function (node) {
    return node.nodeType == 1;
  },

  isTextNode: function (node) {
    return node.nodeType == 3;
  },
};

// 指令处理集合
var compileUtil = {
  // v-text 和 插值语法
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, "text");
  },
  // v-html
  html: function (node, vm, exp) {
    this.bind(node, vm, exp, "html");
  },
  // v-model
  model: function (node, vm, exp) {
    this.bind(node, vm, exp, "model");

    var me = this,
      val = this._getVMVal(vm, exp);
    node.addEventListener("input", function (e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }

      me._setVMVal(vm, exp, newValue);
      val = newValue;
    });
  },
  // v-class
  class: function (node, vm, exp) {
    this.bind(node, vm, exp, "class");
  },

  // 统一解析指令的函数（除了事件）
  // node 文本节点
  // vm 实例对象
  // exp 表达式
  // dir text
  bind: function (node, vm, exp, dir) {
    // 取出更新函数 textUpdater
    var updaterFn = updater[dir + "Updater"];

    // this._getVMVal(vm, exp) 获取表达式的值
    // 调用更新函数 textUpdater 来更新节点内容
    updaterFn && updaterFn(node, this._getVMVal(vm, exp));

    // 所有指令（除了事件指令）和插值语法都有watcher
    // 第三个参数是cb，更新用户界面方法
    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },

  // 事件处理
  // v-on
  // node 元素 button
  // vm 实例对象
  // exp 指令表达式 handleClick
  // dir 指令 on:click
  eventHandler: function (node, vm, exp, dir) {
    // 获取事件名 click
    var eventType = dir.split(":")[1],
      // 获取事件回调函数
      fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      // 给元素绑定事件
      // fn.bind(vm) 将事件回调函数的this强制绑定成vm
      // fn.bind(vm)会返回一个新函数，新函数的this会改变
      // 所以在vue中所有事件回调函数的this指向vm
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },

  /**
   * 去vm上获取表达式的值
   * @param {*} vm 实例对象
   * @param {*} exp 表达式
   */
  _getVMVal: function (vm, exp) {
    // val --> vm
    var val = vm;
    // exp --> person.name
    // ['person', 'name']
    exp = exp.split(".");
    exp.forEach(function (k) {
      /*
                第一次： k --> person
                    val[k] --> vm['person'] --> val赋值person对象
                第二次： k --> name
                    val[k] --> person['name'] --> val赋值jack
            */
      val = val[k];
    });
    return val;
  },

  _setVMVal: function (vm, exp, value) {
    var val = vm;
    exp = exp.split(".");
    exp.forEach(function (k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  },
};

var updater = {
  textUpdater: function (node, value) {
    // 将节点的文本内容，赋值成表达式的值
    node.textContent = typeof value == "undefined" ? "" : value;
  },

  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value == "undefined" ? "" : value;
  },

  classUpdater: function (node, value, oldValue) {
    var className = node.className;
    className = className.replace(oldValue, "").replace(/\s$/, "");

    var space = className && String(value) ? " " : "";

    node.className = className + space + value;
  },

  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == "undefined" ? "" : value;
  },
};
