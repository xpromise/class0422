/*
  nodejs的全局对象：global
    setImmediate / clearImmediate 立即执行函数
    setTimeout / clearTimeout
    setInterval / clearInterval
    queueMicrotask
    process.nextTick 立即执行函数

    异步代码执行机制：
      1. nodejs事件轮询机制
        timers 定时器阶段：回调队列：放置定时器回调函数
        pending callbacks
        idle, prepare
        poll 轮询阶段：回调队列：放置I/O操作回调函数
          一般情况下会一直停留在这个阶段：
            除非满足两个条件之一，就会去check阶段：
              1. 定时器到点了
              2. 之前设置过setImmediate函数
        check 检查阶段：回调队列：放置setImmediate回调函数
        close callbacks
        
      2. 宏任务与微任务
        微任务：优先级高 
          process.nextTick 优先级最高
          queueMicrotask 
          promise.then/catch/finally 
          其他所有微任务就按照代码先后顺序，依次执行
        宏任务：优先级低
          setTimeout
          setImmediate
*/

// console.log(global);

setImmediate(() => {
  console.log(222);
})

setTimeout(() => {
  console.log(111);
}, 0)

queueMicrotask(() => {
  console.log(444);
})

Promise.resolve().then(() => {
  console.log(333);
})

process.nextTick(() => {
  console.log(555);
})

console.log(555);
