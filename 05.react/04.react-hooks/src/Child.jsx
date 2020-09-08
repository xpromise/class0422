import React from "react";

function Child(props) {
  console.log("child render");
  return <div>count: {props.count}</div>;
}

const NewChild = React.memo(Child);
export default NewChild;

// 用于工厂函数组件的性能优化
// React.memo(Child) 相当于 PureComponent
// export default React.memo(Child, (oldProps, newProps) => {
//   // 刚好和shouldComponentUpdate相反
//   // return true; // 不会重新渲染
//   return false; // 会重新渲染
// });
