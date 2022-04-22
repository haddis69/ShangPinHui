//Vue的插件一定暴露了一个对象，这个对象也要有install方法
let myPlugins={};
//括号里注入了Vue构造函数
// 第二个参数是一个对象，这里options可以接收参数，默认值是undefined，Vue.use那里配置，这边options就能接到
myPlugins.install=function(Vue,options){
    //指令的第一个参数是指令名
    //指令的第二个参数是一个回调函数，使用这个指令触发的回调
    //回调里第一个参数是使用这个指令的标签
    //第二个参数是一个对象，里面的属性都指令的值有关，比如v-upper="msg",第二个参数的值都和msg有关,比如value
    //APP.vue有h1标签的测试代码
    Vue.directive(options.name,(element,params)=>{
        element.innerHTML=params.value.toUpperCase();
    })
}
export default myPlugins;