import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
//全局组件的注册，第一个参数是组件名，这里由于TypeNav.name恰好是TypeNav就这样写，第二个参数是具体指哪个组件
//全局组件使用时不需要再重新注册，直接使用即可
Vue.component(TypeNav.name,TypeNav);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  //主文件里引入并使用路由
  router,
  //主文件里引入并使用store，每个组件实例对象上都有了$store属性
  store
}).$mount('#app')
