//登录注册用的同一个模块
import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout,
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
  code: "",
  //起始状态为localStorage的TOKEN为空，第一次登录之后token会从mutations被注入值，也就是重新写入值
  //之后再次刷新页面，state会被清空，但localStorage的TOKEN有值，就会读取重新写入
  token: getToken(),
  //存储用户详细信息
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    //第一次登录之后token会从mutations被注入值，也就是重新写入值
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  //清除本地localStorage数据
  CLEARUSERINFO(state) {
    state.token = "";
    state.userInfo = {};
    removeToken();
  },
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    //发送验证码需要费用，这里后台模拟一个假验证码
    let result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      Promise.reject(new Error("failed"));
    }
  },
  //用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code === 200) {
      return "ok";
    } else {
      Promise.reject(new Error("register failed"));
    }
  },
  //登录业务
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code === 200) {
      commit("USERLOGIN", result.data.token);
      setToken(result.data.token);
      return "ok";
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code === 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    }else{
      Promise.reject(new Error("get user information failed"));
    }
  },
  async userLogout({ commit }) {
    //我们只需要给服务器发请求，服务器就会帮我们清除我们请求头里的token
    //至于本地的token，自己再mutations里面操作就好
    let result = await reqLogout();
    if (result.code === 200) {
      commit("CLEARUSERINFO");
      return "ok";
    } else {
      Promise.reject(new Error("user logout failed"));
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  getters,
  actions,
};
