import React from "react";

/*
  工厂函数组件没有this（没有state/refs）
  没有生命周期函数
*/
// export default function A(props) {
//   // console.log(this);
//   console.log(props); // {name: "jack"}
//   return <div>A...</div>;
// }

/*
  React.forwardRef()会返回一个组件
  props 组件接受的props
  ref 组件设置ref属性
*/
export default React.forwardRef((props, ref) => {
  console.log(props);

  return <div ref={ref}>A...</div>;
});
