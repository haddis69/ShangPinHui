import { reqCategoryList } from "@/api";
const state={
    //state的默认初始值不能乱写，根据接口的返回值初始化
    categoryList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList.slice(0,16);
    }
};
const actions={
    //这里和$store的dispatch值一样
    //reqCategoryList返回的是promise对象，要用async await
    async categoryList({commit}){
        let result=await reqCategoryList();
        if(result.code ===200){
            commit('CATEGORYLIST',result.data);
        }
    }
};
const getters={};
export default {
    state,
    mutations,
    getters,
    actions
}