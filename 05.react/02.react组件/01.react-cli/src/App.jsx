import React, { Component } from "react";
// import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch("http://localhost:9527")
      .then((res) => res.json()) // 转化响应体数据
      .then((res) => {
        // console.log(res);
        const repo = res.items[0];
        this.setState({
          isLoading: false,
          repo: {
            name: repo.name,
            url: repo.html_url,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // 发送请求
    // axios
    //   .get("https://api.github.com/search/repositories?q=r&sort=stars")
    //   .then((res) => {
    //     const repo = res.data.items[0];
    //     this.setState({
    //       isLoading: false,
    //       repo: {
    //         name: repo.name,
    //         url: repo.html_url,
    //       },
    //     });
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       isLoading: false,
    //     });
    //     alert("请求失败~");
    //   });
  }

  render() {
    const { isLoading, repo } = this.state;

    if (isLoading) {
      return <div>loading...</div>;
    }

    return (
      <h1>
        most star repo is <a href={repo.url}>{repo.name}</a>
      </h1>
    );
  }
}
