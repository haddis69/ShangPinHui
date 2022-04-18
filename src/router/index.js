import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        //y滚动条在最上方
        return {y:0};
    }
})