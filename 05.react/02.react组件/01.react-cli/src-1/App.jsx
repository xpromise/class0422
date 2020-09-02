import React from "react";
import "./App.css";

import Hello from "./components/Hello";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="color" style={{ fontSize: 50, lineHeight: "50px" }}>
          hello react cli
        </h1>
        {/* 通过组件标签使用组件 */}
        <Hello />
      </div>
    );
  }
}

export default App;
