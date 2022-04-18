import {reqGoodsInfo} from "@/api";
const state={
    goodInfo:{}
};
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo;
    }
};
const actions={
    async getGoodInfo({commit},skuid){
        let result=await reqGoodsInfo(skuid);
        if(result.code===200){
            commit('GETGOODINFO',result.data);
        }
    }
};
const getters={
    //导航信息
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    //右上方产品信息
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性的变化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}