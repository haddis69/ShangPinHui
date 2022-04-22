import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import './mock/mockServe'
//不只有一处地方需要swiper，所以在全局入口文件引入样式即可
import 'swiper/css/swiper.css'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import {Button,MessageBox} from 'element-ui';
import VueLazyLoad from 'vue-lazyload'
//表单校验文件
import './plugins/validate'
//全局组件的注册，第一个参数是组件名，这里由于TypeNav.name恰好是TypeNav就这样写，第二个参数是具体指哪个组件
//全局组件使用时不需要再重新注册，直接使用即可
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//element-ui的第一种注册方式
Vue.component(Button.name, Button);
//element-ui的第二种注册方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import loading from './assets/1.gif'
//使用懒加载插件，配置懒加载的默认图片
//在img标签里，把:src或者src换成v-lazy，search组件使用了懒加载
Vue.use(VueLazyLoad,{
  loading
});
Vue.config.productionTip = false
//自定义插件
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins,{
  name:'upper'
});
//统一引用所有api暴露的接口，免得单独引入，练习理解原型链的相关知识
//API这里是一个对象
import * as API from './api';
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this;
    //所有vm,vc最后都能找到Vue.prototype，挂载一次全局使用
    Vue.prototype.$API=API;
  },
  //主文件里引入并使用路由
  router,
  //主文件里引入并使用store，每个组件实例对象上都有了$store属性
  store
}).$mount('#app')
