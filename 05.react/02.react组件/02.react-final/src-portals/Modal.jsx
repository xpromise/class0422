import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

export default class Modal extends Component {
  constructor() {
    super();
    // 初始化容器
    this.div = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.div);
  }

  render() {
    const { title, children, visible, close } = this.props;

    if (!visible) {
      return null;
    }

    const Modal = (
      <div className="modal">
        <div className="modal-main">
          <div className="modal-header">
            <h3>{title}</h3>
            <button onClick={close}>X</button>
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            <button onClick={close}>取消</button>
            <button className="modal-confirm-btn">确定</button>
          </div>
        </div>
        <div className="modal-mask"></div>
      </div>
    );

    // 将Modal组件渲染到div上
    return ReactDOM.createPortal(Modal, this.div);
  }
}
