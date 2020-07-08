// 引入nodejs模块 - events
const EventEmitter = require('events');

/* class EventEmitter {
  on() {}
  off() {}
  once() {}
  emit() {}
} */

// 定义 MyEmitter 继承 EventEmitter 的方法
class MyEmitter extends EventEmitter {}
// 创建实例对象
const myEmitter = new MyEmitter();

// 绑定自定义事件(持久)
myEmitter.on('xxx', () => {
  console.log('xxx事件触发了111~');
});
const callback = () => {
  console.log('xxx事件触发了222~');
}
myEmitter.on('xxx', callback);
// 绑定自定义事件(一次性)
myEmitter.once('xxx', () => {
  console.log('xxx事件触发了333~');
});

// 解绑事件
myEmitter.off('xxx', callback);

// 触发自定义事件
myEmitter.emit('xxx');
myEmitter.emit('xxx');