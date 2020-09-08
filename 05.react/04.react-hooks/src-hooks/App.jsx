import React, { useCallback } from "react";
import ReactDOM from "react-dom";

export default function App() {
  // 初始化状态
  /*
    1. React.useState(initVal) 
        作用：让工厂函数组件使用state
      initVal 是状态的初始化值
      返回值是一个数组，数组中有两个元素
      第一个：就是状态数据
      第二个：就是更新状态数据的方法

    2. React.useEffect(callback, [])
        作用：让工厂函数组件使用生命周期函数

    3. React.useCallback(callback, [])
        作用：用来缓存函数
  */
  const [count, setCount] = React.useState(0);
  const [persons, setPersons] = React.useState([]);

  React.useEffect(() => {
    // 本身相当于 componentDidMount + componentDidUpdate
    // 加上第二个参数 [], 相当于 componentDidMount
    console.log("useEffect");
    // 发送请求
    setTimeout(() => {
      setPersons([
        { id: 1, name: "jack" },
        { id: 2, name: "rose" },
        { id: 3, name: "tom" },
        { id: 4, name: "jerry" },
      ]);
    }, 1000);

    return () => {
      // 相当于 componentWillUpdate componentWillUnmount
      console.log("useEffect callback");
    };
  }, [count]);

  const handleClick = useCallback(() => {
    // 更新状态数据的方法
    // 同时也会更新组件
    setCount(count + 1);
  }, [count]);

  const goDie = useCallback(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>+</button>
      <ul>
        {persons.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
      <button onClick={goDie}>卸载</button>
    </div>
  );
}
