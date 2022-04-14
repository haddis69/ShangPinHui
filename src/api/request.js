import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';
//存在跨域问题，可以在vue.config.json中配置devServer，vue.config.js作用就相当于webpack.config.js文件
const requests=axios.create({
    baseURL:"/api",
    timeout:5000
});
//请求拦截，发网络请求之前的行为
requests.interceptors.request.use((config)=>{
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