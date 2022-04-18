import {reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
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
    },
    //第二个参数如果包括传来的是一个对象，需要解构赋值
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //服务器只给我们返回了是否成功，200的状态码，没有其它的有意义的信息，就不用三连环存储了
        //加了await就会返回一个Promise实例的结果
        //返回的如果是非空字符串，就代表成功，如果是Promise的reject对象就代表失败
        //在dispatch一端可以放一个变量来接住这个值
        let result=await reqAddOrUpdateShopCart(skuId,skuNum);
        //代表成功了
        if(result.code==200){
            //非空字符串
            return 'ok';
        }
        else{
            return Promise.reject(new Error('request failed'));
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