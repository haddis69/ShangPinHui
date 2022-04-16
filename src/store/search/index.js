import { reqGetSearchInfo } from "@/api";
const state={
    searchList:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;
    }
};
const actions={
    //由于服务器原因，这里的params至少是一个空对象，所以巧用了默认值写法
    async getSearchList({commit},params={}){
        let result=await reqGetSearchInfo(params);
        if(result.code===200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
const getters={
    //这里看到的state是当前小仓库的state，getters就是为了简化数据而存在的
    //假如网络不好，state为空，state.search就是undefined，undefined再往下遍历查询就会报错，至少是个空对象
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}