import { reqCartList,reqDeleteCartById,reqUpdateCheckById} from "@/api";
const state={
    cartList:[]
};
const mutations={
   GETCARTLIST(state,cartList){
        state.cartList=cartList;
   }
};
const actions={
    //请求头发送UUID个人信息
    async getCartList({commit}){
        let result=await reqCartList();
        if(result.code===200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartListById({commit},skuId){
        let result =await reqDeleteCartById(skuId);
        if(result.code===200){
            return 'ok'
        }else{
            Promise.reject(new Error('request failed'));
        }
    },
    async updateCheck({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckById({skuId,isChecked});
        if(result.code===200){
            return 'ok';
        }else{
            Promise.reject(new Error('update failed'));
        }
    },
    //括号里是上下文，可以拿到state dispatch commit getters mutations等很多值
    //需要什么就解构,state，getters就能根据后端数据结构看到商品序列
    async deleteAllCheckedCart({dispatch,getters}){
        let promiseAll =[];
        //调用的次数就是商品序列的数组长度
        getters.cartList.cartInfoList.forEach(item => {
            //每删一个产品返回一个promise
            let promise=item.isChecked==1?dispatch('deleteCartListById',item.skuId):'';
            promiseAll.push(promise);
        });
        //返回的是成功与失败，全部成功结果就为成功，一个失败就是失败
        return Promise.all(promiseAll);
    },
    async updateAllIsChecked({dispatch,state},checked){
        let promiseAll =[];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise=dispatch('updateCheck',{skuId:item.skuId,isChecked:checked});
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
};
const getters={
    cartList(state){
        return state.cartList[0] || {};
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}