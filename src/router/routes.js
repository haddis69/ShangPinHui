import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart';
import Trade from '../pages/Trade';
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import MyOrder from '../pages/Center/myOrder';
import GroupOrder from '../pages/Center/groupOrder';
export default [
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
        meta:{show:true}
    },
    {
        path:"/pay",
        name:'pay',
        component:Pay,
        meta:{show:true}
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