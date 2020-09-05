import React, { Component } from "react";
import {
  BrowserRouter as Router, // as 重命名
  // HashRouter as Router,
  Link,
  NavLink,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 
                Link组件 相当于a标签
                  禁止默认行为：1. 不会跳转网址 2. 不会发送请求
                  只会使用 history.push 跳转

                NavLink 相当于Link组件
                  多一个选中的默认样式 active  
                    activeClassName="my-active" 可以改变选中的样式
              */}
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <div>
                  {/* 
                    Route 根据浏览器地址的变化，加载相应的路由组件
                      path 路由路径
                      component 路由组件
                      exact 严格匹配
                    Redirect 能匹配任意路径
                    Switch 开关：切换组件显示
                      内部组件只会加载一个，后面的就不看了
                  */}
                  <Switch>
                    {/* 不严格匹配：匹配路径只要以path开头即可 */}
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect to="/home" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
