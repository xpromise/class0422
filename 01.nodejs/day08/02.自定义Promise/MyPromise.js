/*
  搞懂每一行代码
    1. 为什么要这么写
    2. 有什么用
*/

function MyPromise(exector) {
  var _this = this;
  // 因为将来new MyPromise() 所以MyPromise函数的this指向实例对象
  // 定义实例对象promise的状态
  _this._status = "pending";
  // 定义实例对象的结果值
  _this._result = undefined;
  // 定义实例对象将来需要调用回调函数（成功/失败）容器
  _this._callback = {};

  // 将promise实例对象的状态改成resolved
  function resolve(value) {
    // if (_this._status === "pending") {
    //   _this._status = "resolved";
    // }
    if (_this._status !== "pending") return;
    _this._status = "resolved";
    _this._result = value;
    // 异步调用成功回调函数
    setTimeout(() => {
      _this._callback.onResolved && _this._callback.onResolved(value);
      // 判断_this._callback有没有onResolved这个属性，如果存在，就执行_this._callback.onResolved()
      // 如果不存在后面就不执行了
      // _this._callback?.onResolved(); // ES11
    })
  }

  // 将promise实例对象的状态改成rejected
  function reject(reason) {
    if (_this._status !== "pending") return;
    _this._status = "rejected";
    _this._result = reason;
    // 异步调用成功回调函数
    setTimeout(() => {
      _this._callback.onRejected && _this._callback.onRejected(reason);
    })
  }

  // 同步调用
  exector(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  // 给容器添加将来需要调用的回调函数
  this._callback.onResolved = onResolved;
  this._callback.onRejected = onRejected;

  return new MyPromise(function (resolve, reject) {
    
  });
};
