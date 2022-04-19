<template>
  <div class="list-container">
    <div class="sortList clearfix">
        <div class="center">
            <!--banner轮播-->
        <Carousel :list="bannerList"/>
        </div>
        <div class="right">
            <div class="news">
                <h4>
                    <em class="fl">尚品汇快报</em>
                    <span class="fr tip">更多 ></span>
                </h4>
                <div class="clearix"></div>
                <ul class="news-list unstyled">
                    <li>
                        <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                    </li>
                    <li>
                        <span class="bold">[公告]</span>备战开学季 全民半价购数码
                    </li>
                    <li>
                        <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                    </li>
                    <li>
                        <span class="bold">[公告]</span>备战开学季 全民半价购数码
                    </li>
                    <li>
                        <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                    </li>
                </ul>
            </div>
            <ul class="lifeservices">
                <li class=" life-item ">
                    <i class="list-item"></i>
                    <span class="service-intro">话费</span>
                </li>
                <li class=" life-item ">
                    <i class="list-item"></i>
                    <span class="service-intro">机票</span>
                </li>
                <li class=" life-item ">
                    <i class="list-item"></i>
                    <span class="service-intro">电影票</span>
                </li>
                <li class=" life-item ">
                    <i class="list-item"></i>
                    <span class="service-intro">游戏</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">彩票</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">加油站</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">酒店</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">火车票</span>
                </li>
                <li class=" life-item ">
                    <i class="list-item"></i>
                    <span class="service-intro">众筹</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">理财</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">礼品卡</span>
                </li>
                <li class=" life-item">
                    <i class="list-item"></i>
                    <span class="service-intro">白条</span>
                </li>
            </ul>
            <div class="ads">
                <img src="./images/ad1.png" />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import{mapState} from 'vuex';
export default {
    name:'ListContainer',
    mounted() {
      //挂在之后开始请求数据，接下来还是一样的在store中dispatch和commit，一样的套路
      this.$store.dispatch('getBannerList');
    },
    computed: {
      //同样的方法解析数据
      ...mapState({
        bannerList:state=>state.home.bannerList
      })
    },
    //这里不能放在mounted里面，因为服务器发请求，再从store返回数据，再v-for遍历，生成结构都需要时间，而new Swiper要保证已经有结构
    //不能使用update，只要页面更新，不管什么地方就要重新new Swiper,不实际
    //watch是监听数据变化的，有函数和对象两种写法。handler这个词是固定的，里面传两个值，新值和旧值
    //nextTick是页面重新渲染DOM，并且循环完成之后开始执行。修改数据之后立即执行DOM，获取新的数据
    //由于配合上了watch handler,所以只在bannerList变化的时候才会执行该函数
    //nextTick可以保证页面有结构，不会出现上述mounted中空白的情况，并且由于很多插件需要加载时间，所以经常配合插件使用
}
</script>
<style>
    .list-container {
  width: 1200px;
  margin: 0 auto;
}
.list-container .sortList {
  height: 464px;
  padding-left: 210px;
}
.list-container .sortList .center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;
}
.list-container .sortList .right {
  float: left;
  width: 250px;
}
.list-container .sortList .right .news {
  border: 1px solid #e4e4e4;
  margin-top: 5px;
}
.list-container .sortList .right .news h4 {
  border-bottom: 1px solid #e4e4e4;
  padding: 5px 10px;
  margin: 5px 5px 0;
  line-height: 22px;
  overflow: hidden;
  font-size: 14px;
}
.list-container .sortList .right .news h4 .fl {
  float: left;
}
.list-container .sortList .right .news h4 .fr {
  float: right;
  font-size: 12px;
  font-weight: 400;
}
.list-container .sortList .right .news .news-list {
  padding: 5px 15px;
  line-height: 26px;
}
.list-container .sortList .right .news .news-list .bold {
  font-weight: 700;
}
.list-container .sortList .right .lifeservices {
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.list-container .sortList .right .lifeservices .life-item {
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin-right: -1px;
  height: 64px;
  text-align: center;
  position: relative;
  cursor: pointer;
  width: 25%;
}
.list-container .sortList .right .lifeservices .life-item .list-item {
  background-image: url(~@/assets/images/icons.png);
  width: 61px;
  height: 40px;
  display: block;
}
.list-container .sortList .right .lifeservices .life-item .service-intro {
  line-height: 22px;
  width: 60px;
  display: block;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(1) .list-item {
  background-position: 0px -5px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(2) .list-item {
  background-position: -62px -5px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(3) .list-item {
  background-position: -126px -5px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(4) .list-item {
  background-position: -190px -5px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(5) .list-item {
  background-position: 0px -76px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(6) .list-item {
  background-position: -62px -76px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(7) .list-item {
  background-position: -126px -76px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(8) .list-item {
  background-position: -190px -76px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(9) .list-item {
  background-position: 0px -146px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(10) .list-item {
  background-position: -62px -146px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(11) .list-item {
  background-position: -126px -146px;
}
.list-container .sortList .right .lifeservices .life-item:nth-child(12) .list-item {
  background-position: -190px -146px;
}
.list-container .sortList .right .ads {
  margin-top: 5px;
}
.list-container .sortList .right .ads img {
  opacity: 0.8;
  transition: all 400ms;
}
.list-container .sortList .right .ads img:hover {
  opacity: 1;
}

</style>