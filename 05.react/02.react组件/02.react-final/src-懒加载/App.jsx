import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* 导航链接 */}
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.title}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* 加载组件 */}
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
