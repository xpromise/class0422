import { REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR } from "./mutation-types";

const mutations = {
  // 请求中
  [REQUESTING]: function(state) {
    state.isFirstView = false;
    state.isLoading = true;
  },
  // 请求成功
  [REQUEST_SUCCESS](state, payload) {
    state.isLoading = false;
    state.users = payload;
  },
  // 请求失败
  [REQUEST_ERROR](state, payload) {
    state.isLoading = false;
    state.users = null;
    state.error = "网络出现故障...";
  },
};

export default mutations;
