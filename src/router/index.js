import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '../store'
Vue.use(VueRouter);
let router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        //y滚动条在最上方
        return {y:0};
    }
})
//前置守卫，路由跳转之前可以判断
router.beforeEach(async(to,from,next)=>{
    //to 去哪里 path属性可以得到
    //from 从哪里来
    //next 放行函数 里面传路径放行到指定路由
    // next();
    //登录了才会有token
    let token=store.state.user.token;
    //store.state.user.userInfo.name是用户信息中的用户名，是一个字符串，有就是真没有就是假
    //但是store.state.user.userInfo即使是空的也是一个空对象，空对象的布尔值也是真，所以不能这么判断
    let userName=store.state.user.userInfo.name;
    //已经登录了，不能去login页面
    if(token){
        if(to.path=='/login'||to.path=='/register'){
            next('/home');
        }else{
            //登录了但是去的不是login
            //有用户名,即有了用户信息，放行
            if(userName){
                next();
            }else{
                //登录了但是去的不是login
                //没有用户信息,那就要发请求获取用户信息,返回的同样是一个promise对象，然后放行
                //async写在就近的函数里
                //刷新就会清空store，就会走这个分支
                try{
                    //获取用户信息成功就放行
                    await store.dispatch('getUserInfo');
                    next();
                }catch(error){
                    //token过期了，token已经被写到了请求头里，每次请求都会带
                    //重新登录,先退出登录，userLogout里附带了清除localstorage的功能
                    await store.dispatch('userLogout');
                    // 跳转到登录页面
                    next('/login');
                }
            }
        }
    }else{
        //没登录，游客身份
        //不能去交易相关，支付相关(pay||paysuccess)，不能去个人中心
        //没登录就去上面的这些路由，跳到登录页
        //其它情况 放行
        let toPath=to.path;
        //包含了/trade /pay或者/paysuccess indexOf('/pay')里包含了paysuccess
        if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            //query参数 把未登录但想去的信息存储在路由当中
            //登录之后直接跳到当时想去(重定向的页码)
            //在登录组件里也重新写了跳转的逻辑  let toPath=this.$route.query.redirect || '/home';
            //this.$route.query.redirect里有值，就跳转这个值，否则就跳home
            next('/login?redirect='+toPath);
        }else{
            next();
        }
    }
})
export default router;