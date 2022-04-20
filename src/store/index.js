import Vue from "vue";
import Vuex from "vuex";
//需要Vue.use这个插件来声明使用
Vue.use(Vuex);
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";
//对外暴露一个store实例，里面传入配置信息,这里是模块
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
});