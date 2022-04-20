//统一管理api
import requests from "./request";
//别名
import mockRequests from './mockAjax';
//请求作为函数的返回值，每当外界调用该函数的时候就会发送请求，这里使用了es6只有一行的简写方法

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'GET'})
//已经写了baseUrl
//和上面是两种写法
export const reqGetBannerList=()=>mockRequests.get('/banner');
export const reqGetFloorList=()=>mockRequests.get('/floor');

//搜索商品 路径地址 /api/list 请求方式 POST 
/**
    {
     "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
    }
 */
//当前服务器接口，请求的参数至少是一个空对象。post的params参数是data属性
export const reqGetSearchInfo=(params)=>requests({url:'/list',method:'POST',data:params})

//产品详情信息   /api/item/{skuid}
export const reqGoodsInfo=(skuid)=>requests({url:`/item/${skuid}`,method:'GET'})

//将产品添加到购物车或者或者更新个数
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'POST'})

// /api/cart/cartList   get
//请求头里已经有uuid了，返回的数据都是根据uuid查询到的，所以无需传参
export const reqCartList=()=>requests({url:'/cart/cartList',method:'GET'})

//删除购物车   /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})

//切换商品选中状态   /api/cart/checkCart/{skuId}/{isChecked}   get
export const reqUpdateCheckById=({skuId,isChecked})=> requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'GET'});

//验证码   /api/user/passport/sendCode/{phone}   get
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'GET'});

//注册接口 /api/user/passport/register   post
//post用data
export const reqUserRegister=(data)=>requests({url:'/user/passport/register',data,method:'POST'})

//登录接口   /api/user/passport/login   post
export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'POST'});

//获取用户信息   /api/user/passport/auth/getUserInfo   get   需要带着token向服务器要信息 
//这里和uuid一样 放在请求头里 服务器并没有让我们带参
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'GET'});

//退出登录   /api/user/passport/logout   GET
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'GET'});