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
      // _this._callback.onResolved && _this._callback.onResolved(value);
      // 判断_this._callback有没有onResolved这个属性，如果存在，就执行_this._callback.onResolved()
      // 如果不存在后面就不执行了
      /*
        obj?.prop 如果obj存在，就返回obj.prop的值
        obj?.[expr] 如果obj存在，就返回 obj[expr] 的值
        arr?.[index] 如果arr存在, 就返回 arr[index] 的值
        func?.(args) 如果func存在，就调用 func(args)，并返回其值
          如果不存在，返回undefined
      */
      _this._callback.onResolved?.(value); // ES11
    });
  }

  // 将promise实例对象的状态改成rejected
  function reject(reason) {
    if (_this._status !== "pending") return;
    _this._status = "rejected";
    _this._result = reason;
    // 异步调用成功回调函数
    setTimeout(() => {
      _this._callback.onRejected && _this._callback.onRejected(reason);
    });
  }

  // 同步调用
  exector(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  var _this = this;
  // 返回的新promise对象的状态看 onResolved / onRejected 函数的执行结果
  return new MyPromise(function (resolve, reject) {
    // 给容器添加将来需要调用的回调函数
    _this._callback.onResolved = function (value) {
      try {
        // 调用成功回调函数，得到结果值
        var result = onResolved(value);
        // 判断result是否是promise对象
        // 因为只有promise才有then方法，promise.__proto__才会等于MyPromise.prototype
        if (result instanceof MyPromise) {
          // 说明result是promise
          // result的状态是啥，新promise对象的状态就是啥
          // 最终目的：result的状态变成功，新promise对象就成功，反之失败
          /* result.then(
            function (value) {
              resolve(value);
            },
            function (reason) {
              reject(reason);
            }
          ); */
          result.then(resolve, reject);
        } else {
          // 说明result不是promise
          // 返回的新promise对象的状态就是resolved
          resolve(result);
        }
      } catch (e) {
        // 函数出错了
        reject(e);
      }
    };
    
    _this._callback.onRejected = function (value) {
      try {
        var result = onRejected(value);
        if (result instanceof MyPromise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    };
  });
};
