import React, { Component } from "react";

import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    searchName: "",
  };

  getSearchName = (searchName) => {
    this.setState({
      searchName,
    });
  };

  render() {
    const { searchName } = this.state;
    return (
      <div className="container">
        <Search getSearchName={this.getSearchName} />
        <List searchName={searchName} />
      </div>
    );
  }
}
