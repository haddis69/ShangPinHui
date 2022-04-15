<template lang="">
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex">
                <h2 class="all">全部商品分类</h2>
                <div class="sort">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                            <h3 @mouseenter="changeIndex(index)">
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import throttle from 'lodash/throttle';
export default {
    name:'TypeNav',
    data() {
        return {
            currentIndex:-1
        }
    },
    mounted() {
        this.$store.dispatch('categoryList');
    },
    computed: {
        //mapState中传入对象的时候，右侧为一个函数，当需要使用这个值的时候，右侧的函数就会立刻执行
        //这里注入的state是全局的state，大仓库，能看到全局的每个小仓库的state
        ...mapState({
            categoryList:(state)=>{
                return state.home.categoryList;
            }
        })
    },
    methods: {
        //用户过快切换三级联动面板过快会发生卡顿，比如1秒切换了10次，只有几次是有效的切换，即浏览器反应不过来那么快的切换速度
        //前面拿到并传入了index,并且这里使用了lodash节流
        //lodash有很多方法，并向外暴露_符号，类似于jq的$，这里按需引入节流方法
        //防抖：debounce方法，作用是短时间最后一次执行某回调函数之后，等待一定时长再触发该回调函数的结果
        //节流：throttle方法，作用是每间隔一个固定短时间比如1秒执行一次回调函数的结果，执行该回调函数的触发动作再快，结果也一样
        changeIndex:throttle(function(index){
            this.currentIndex=index;
        },50),
        leaveIndex(){
            this.currentIndex=-1;
        },
        //不能使用声明式路由导航，因为这是循环出来的，太耗费性能
        //不能在a标签上加@click事件，同样耗费性能不太好
        //不能单纯使用事件委托在外层div上，委托一个@click事件，因为外层div有众多子节点，都会委托，无法区分点击的是不是a标签
        //用event的target方法可以知道点击的是谁(如果是外层节点，那也会打印出里面的节点)
        //event.target.dataset方法可以查询到自定义属性，如果点击的对象没有自定义的属性，就返回一个空对象
        //上文是categoryName，但dataset方法输出之后会自动把大写替换成小写，所以是categoryname
        //这样就能查询到a标签
        //同理用category1id，category2id，category3id区分三个a标签
        goSearch(event){
            let element=event.target;
            // console.log(element.dataset);
            let {categoryname,category1id,category2id,category3id}=element.dataset;
            let location={name:"search"},
                query={categoryName:categoryname};
            if(categoryname){
                if(category1id){
                    query.category1Id=category1id;
                }else if(category2id){
                    query.category2Id=category2id;
                }else{
                    query.category3Id=category3id;
                }
                location.query=query;
                //实现要在router文件夹里注册name属性，否则不能通过$router.push的name方法找到search
                this.$router.push(location);
            }
        }
    },
}
</script>
<style>
    .type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.cur{
    background-color: skyblue;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
/* .type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
} */

</style>