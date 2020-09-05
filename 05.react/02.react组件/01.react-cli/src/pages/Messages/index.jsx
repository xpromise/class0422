import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Detail from "../Detail";

export default class Messages extends Component {
  render() {
    return (
      <div>
        Messages...
        <ul>
          <li>
            <Link to="/home/messages/1?name=jack">Message 001</Link>
          </li>
          <li>
            <Link to="/home/messages/3">Message 003</Link>
          </li>
          <li>
            <Link to="/home/messages/5">Message 005</Link>
          </li>
        </ul>
        <Route path="/home/messages/:id" component={Detail} />
      </div>
    );
  }
}
