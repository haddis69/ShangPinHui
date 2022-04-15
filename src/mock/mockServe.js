import Mock from "mockjs";
//json不需要对外暴露，webpack默认json和图片是对外暴露的
import banner from './banner.json';
import floor from './floor.json';
//配置假请求的信息
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});
//这个文件要在main.js中引入执行