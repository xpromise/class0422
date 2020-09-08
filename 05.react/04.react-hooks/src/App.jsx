import React, { useState, useCallback } from "react";

import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleNumClick = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div>
      <h1>App..</h1>
      <p>num: {num}</p>
      <button onClick={handleClick}>count++</button>
      <button onClick={handleNumClick}>num++</button>
      <Child count={count} />
    </div>
  );
}
