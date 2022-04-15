import { reqCategoryList,reqGetBannerList } from "@/api";
const state={
    //state的默认初始值不能乱写，根据接口的返回值初始化
    categoryList:[],
    bannerList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList.slice(0,16);
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
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
    },
    async getBannerList({commit}){
        let result=await reqGetBannerList();
        if(result.code===200){
            commit('GETBANNERLIST',result.data)
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