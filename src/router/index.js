import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
export default new VueRouter({
    routes:[
        {
            path:'/home',
            name:'home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{show:false}
        },
        {
            path:"/search/:keyword?",
            name:'search',
            component:Search,
            meta:{show:true}
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})