// import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
// import Search from '../pages/Search';
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart';
import Trade from '../pages/Trade';
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import MyOrder from '../pages/Center/myOrder';
import GroupOrder from '../pages/Center/groupOrder';
//路由懒加载
const foo=()=>{
    //这里返回的是一个Promise对象
    //访问的时候才会执行这里的语句，平时不会加载这个路由。这个箭头函数可以简写成一行
    return import('../pages/Home')
}
export default [
    {
        path:'/home',
        name:'home',
        component:foo,
        //路由懒加载
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
        //路由懒加载的简写
        component:()=>import('../pages/Search'),
        meta:{show:true}
    },
    {
        path:"/detail/:skuid",
        name:'detail',
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/addcartsuccess",
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:"/shopcart",
        name:'shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:"/trade",
        name:'trade',
        component:Trade,
        meta:{show:true},
        //独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path:"/pay",
        name:'pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next();
            }
            else{
                next(false);
            }
        }
    },
    {
        path:"/paysuccess",
        name:'paysuccess',
        component:PaySuccess,
        meta:{show:true}
    },
    {
        path:"/center",
        name:'center',
        component:Center,
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ],
        meta:{show:true}
    },
    {
        path:'*',
        redirect:'/home'
    }
]