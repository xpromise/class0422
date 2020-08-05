// 使用vuex
import Vue from "vue";
// Vuex是Vue的插件
import Vuex from "vuex";

// 安装插件/使用插件
Vue.use(Vuex);

/**
 * 用来集中式管理多个组件共享的状态数据（普通data数据）
 */
const state = {
  count: 0,
};

/**
 * 用来集中式管理多个组件共享的状态数据（计算属性数据）
 */
const getters = {
  oddOrEven(state) {
    return (state.count & 1) === 0 ? "偶数" : "奇数";
  },
};

/**
 * 包含n个用来间接修改state的方法对象
 *    用来触发mutation函数的调用
 *    发送ajax请求
 */
const actions = {
  // increment(context, number) {
  //   // action函数的第二个参数就是dispatch传入的第二个参数
  //   console.log("action", number);
  //   // commit方法一旦调用，就会触发相应的mutation函数
  //   context.commit("INCREMENT", number);
  // },
  // decrement({ commit }, number) {
  //   commit("DECREMENT", number);
  // },
  incrementIfOdd({ commit, state }, number) {
    if ((state.count & 1) === 0) return;
    commit("INCREMENT", number);
  },
  incrementAsync({ commit }, number) {
    setTimeout(function() {
      commit("INCREMENT", number);
    }, 1000);
  },
};

/**
 * 包含n个用来直接修改state的方法对象
 */
const mutations = {
  INCREMENT(state, payload) {
    // mutation函数的第二个参数就是commit函数的第二个参数
    console.log("mutation", payload);
    // state是整个状态对象
    state.count += payload;
  },
  DECREMENT(state, number) {
    // state是整个状态对象
    state.count -= number;
  },
};

/**
 * store对象
 *    就有所有的状态数据和更新状态数据的方法
 *    store.state  访问vuex状态数据
 *    store.getters 访问vuex计算属性数据
 *    store.dispatch('xxx') 触发action函数
 *    store.commit('xxx') 触发mutation函数
 */
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

// 暴露出去，给外面使用
export default store;
