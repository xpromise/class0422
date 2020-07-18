
function MyPromise(exector) {
  var _this = this;
  // 因为将来new MyPromise() 所以MyPromise函数的this指向实例对象
  // 定义实例对象promise的状态
  _this._status = "pending";

  // 将promise实例对象的状态改成resolved
  function resolve() {
    // if (_this._status === "pending") {
    //   _this._status = "resolved";
    // }
    if (_this._status !== "pending") return;
    _this._status = "resolved";
  }

  // 将promise实例对象的状态改成rejected
  function reject() {
    if (_this._status !== "pending") return;
    _this._status = "rejected";
  }

  // 同步调用
  exector(resolve, reject);
}
