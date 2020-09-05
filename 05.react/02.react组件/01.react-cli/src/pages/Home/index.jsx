import React, { Component } from "react";

import { NavLink, Route, Redirect, Switch } from "react-router-dom";

import News from "../News";
import Messages from "../Messages";

export default class Home extends Component {
  
  render() {
    return (
      <div>
        <h2>Home...</h2>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/home/messages">Messages</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/messages" component={Messages} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
