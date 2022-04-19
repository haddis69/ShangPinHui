import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';

//引入store 因为请求头需要携带store中的uuid数据，接口由后台决定
//后台规定了只能路由只能携带两个参数，所以只能在请求头里携带数据
import store from "@/store";

//存在跨域问题，可以在vue.config.json中配置devServer，vue.config.js作用就相当于webpack.config.js文件
const requests=axios.create({
    baseURL:"/api",
    timeout:5000
});
//请求拦截，发网络请求之前的行为
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        //config.headers为请求头   userTempId这个值是后端设定的，不能乱写
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    //请求时开始出线加载蓝条
    nprogress.start();
    return config;
})
//响应拦截，浏览器收到服务器数据之后，即将呈现数据的时候的行为
requests.interceptors.response.use((res)=>{
    //响应完成后结束加载蓝条的状态
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('failed'));
})
export default requests;