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
