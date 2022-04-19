//登录注册用的同一个模块
import {reqGetCode,reqUserRegister} from "@/api";
const state={
    code:''
};
const mutations={
    GETCODE(state,code){
        state.code=code
    }
};
const actions={
    //获取验证码
    async getCode({commit},phone){
        //发送验证码需要费用，这里后台模拟一个假验证码
        let result=await reqGetCode(phone);
        if(result.code===200){
            commit('GETCODE',result.data);
            return 'ok';
        }else{
            Promise.reject(new Error('failed'));
        }
    },
    //用户注册
    async userRegister({commit},user){
        let result=await reqUserRegister(user);
        if(result.code===200){
            return 'ok';
        }else{
            Promise.reject(new Error('register failed'));
        }
    }
};
const getters={

};
export default {
    state,
    mutations,
    getters,
    actions
}