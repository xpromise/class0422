/*
  搞懂每一行代码
    1. 为什么要这么写
    2. 有什么用
*/

function MyPromise(executor) {
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
    setTimeout(function () {
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
    // 异步调用失败回调函数
    setTimeout(() => {
      _this._callback.onRejected && _this._callback.onRejected(reason);
    });
  }

  // 同步调用
  executor(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  var _this = this; // promise1

  // 当使用catch方法时，不传成功的回调函数（undefined），需要给一个默认的成功回调函数
  // 来保证promise成功的状态和结果值能往下传递
  onResolved =
    typeof onResolved !== "function"
      ? function (value) {
          return value;
        }
      : onResolved;

  // 当使用then方法只传一个函数时，不传失败的回调函数（undefined），需要给一个默认的成功回调函数
  // 来保证promise失败的状态和结果值能往下传递
  onRejected =
    typeof onRejected !== "function"
      ? function (reason) {
          // throw关键字不能和return一起使用
          throw reason;
        }
      : onRejected;

  // 返回的新promise2对象的状态看 onResolved / onRejected 函数的执行结果
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

    _this._callback.onRejected = function (reason) {
      try {
        var result = onRejected(reason);
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

MyPromise.prototype.catch = function (onRejected) {
  // const promise = this.then(undefined, onRejected);
  // return promise;
  return this.then(undefined, onRejected);
};


MyPromise.prototype.finally = function (onResolved) {
  // 如果上一个promise状态是失败的，返回值一定是失败的promise
  // 如果上一个promise状态是成功的，返回值promise的状态就看 onResolved 执行结果

  // this指向上一个promise
  return this.then(
    // onResolved,
    function (value) {
      var result = onResolved();
      if (result instanceof MyPromise) {
        return result.then(function () {
          return value;
        });
      } else {
        return value;
      }
    },
    function (reason) {
      /*
        reason是上一个promise对象失败的原因
        如果上一个promise状态是失败的，返回值一定是失败的promise
          如果当前 onResolved 也失败了，结果值就是 onResolved 失败原因
            执行函数报错，最终结果值就是报错的原因
            返回值是一个失败的promise，最终结果值就是失败的promise内部的结果值
          如果当前 onResolved 没有失败，结果值就是 上一个promise失败原因
            执行函数返回值是一个普通值，最终结果值就是上一个promise失败原因
            返回值是一个成功的promise，最终结果值就是上一个promise失败原因
      */
      var result = onResolved();
      if (result instanceof MyPromise) {
        return result.then(function () {
          throw reason;
        });
      } else {
        throw reason;
      }
    }
  );
};

// 一定生成一个失败的Promise对象
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  })
} 

// 不一定生成成功Promise对象
// 也有可能是失败的Promise对象
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  })
} 

MyPromise.prototype.all = function () {

}

MyPromise.prototype.allSettled = function () {
  
}