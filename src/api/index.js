//统一管理api
import requests from "./request";
//别名
import mockRequests from './mockAjax';
//请求作为函数的返回值，每当外界调用该函数的时候就会发送请求，这里使用了es6只有一行的简写方法

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'GET'})
//已经写了baseUrl
export const reqGetBannerList=()=>mockRequests.get('/banner');
