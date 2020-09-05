import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class List extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired,
  };

  state = {
    isFirstView: true,
    isLoading: false,
    users: null,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isFirstView: false,
      isLoading: true,
    });
    // 发送请求
    // axios.get(`http://localhost:9527?searchName=${nextProps.searchName}`);
    axios
      .get(`http://localhost:9527`, {
        params: {
          searchName: nextProps.searchName,
        },
      })
      .then((res) => {
        // 请求成功
        this.setState({
          isLoading: false,
          users: res.data.items.map((item) => {
            return {
              name: item.login,
              url: item.html_url,
              img: item.avatar_url,
              id: item.id,
            };
          }),
        });
      })
      .catch((err) => {
        console.dir(err);
        // 请求失败
        this.setState({
          isLoading: false,
        });
        alert("请求失败~");
      });
  }

  render() {
    const { isFirstView, isLoading, users } = this.state;

    if (isFirstView) {
      return <h1>enter name to search</h1>;
    } else if (isLoading) {
      return <h1>loading...</h1>;
    }

    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                <img src={user.img} style={{ width: 100 }} alt="用户头像" />
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
