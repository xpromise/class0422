import { createContext } from "react";

/*
  nameContext 是一个对象
  对象内部包含两个组件
    Provider 负责提供数据
    Consumer 负责接收祖先组件传递的数据
*/
const nameContext = createContext();

export default nameContext;
