import axios from "axios";
import { REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR } from "./mutation-types";

const actions = {
  search({ commit }, searchName) {
    // 触发mutation
    commit(REQUESTING);
    // 发送ajax请求
    axios
      .get(`http://localhost:9527/api?q=${searchName}`)
      .then((res) => {
        commit(REQUEST_SUCCESS, res.data.items);
      })
      .catch((err) => {
        commit(REQUEST_ERROR, err);
      });
  },
};

export default actions;
