<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removeCategoryName">x</i>
            </li>
            <li class="with-x" v-show="searchParams.keyword">
              {{ searchParams.keyword }}<i @click="removeKeyword">x</i>
            </li>
            <li class="with-x" v-show="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1]
              }}<i @click="removeTrademark">x</i>
            </li>
            <li
              class="with-x"
              v-for="(attrValue, index) in searchParams.props"
              :key="index"
            >
              {{ attrValue.split(":")[1] }}<i @click="removeAttr(index)">x</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @tradeMarkInfo="tradeMarkInfo" @attrInfo="attrInfo" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{ active: isOne }" @click="changeOrder('1')">
                  <a href="#"
                    >综合
                    <span
                      v-show="isOne"
                      class="iconfont"
                      :class="{
                        'icon-direction-up': isAsc,
                        'icon-direction-down': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
                <li :class="{ active: isTwo }" @click="changeOrder('2')">
                  <a href="#"
                    >价格
                    <span
                      v-show="isTwo"
                      class="iconfont"
                      :class="{
                        'icon-direction-up': isAsc,
                        'icon-direction-down': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(good, index) in goodsList"
                :key="good.id"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/detail/${good.id}`">
                      <!-- 懒加载 -->
                      <img v-lazy="good.defaultImg"
                    /></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i> {{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ good.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            :pageno="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="total"
            :continues="5"
            @getPageNo="getPageNo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Search",
  components: {
    SearchSelector,
  },
  data() {
    return {
      searchParams: {
        //一级分类id
        category1Id: "",
        //二级分类id
        category2Id: "",
        //三级分类id
        category3Id: "",
        //分类名字
        categoryName: "",
        //关键字
        keyword: "",
        //价格升序还是降序
        order: "1:desc",
        //分页器当前第几页
        pageNo: 1,
        //每页有几条数据
        pageSize: 10,
        //平台售卖属性的参数
        props: [],
        //品牌
        trademark: "",
      },
    };
  },
  beforeMount() {
    //笨方法就是this.searchParams.category1Id=this.$route.query.category1Id这种语句重复写
    //Search组件挂载之前，这个钩子可以修改数据
    //Object.assign的巧用：es6新方法，把第二个及以后的数据“倒入”到第一个对象里，后面的同名属性覆盖前面的
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    //mounted只会执行一次，如果写在mounted里之后就不会发送请求
    this.getData();
  },
  computed: {
    //Getters不分模块，从数组中捞，捞出来的数据直接就能用
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: (state) => state.search.searchList.total,
    }),
    isOne() {
      return this.searchParams.order.indexOf(1) != -1;
    },
    isTwo() {
      return this.searchParams.order.indexOf(2) != -1;
    },
    isAsc() {
      return this.searchParams.order.indexOf("asc") != -1;
    },
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("getSearchList", this.searchParams);
    },
    removeCategoryName() {
      //上面的面包屑显示与否是双向绑定的，categoryName置空上面自然就没了,当然categoryid也要置空
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      //还要再发一次请求
      this.getData();
      //地址栏清空,自己跳自己，就清空query了
      //如果有params,就应该带着，本意是删除query
      if (this.$route.params) {
        this.$router.push({ name: "search", params: this.$route.params });
      }
    },
    removeKeyword() {
      this.searchParams.keyword = "";
      this.getData();
      // main.js中注册了全局时间总线之后，这里emit想执行的函数
      this.$bus.$emit("clear");
      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
    },
    removeTrademark() {
      this.searchParams.trademark = "";
      this.getData();
    },
    //子给父传参数，通常使用自定义事件
    //父组件给子组件在标签里注入一个@开头的自定义事件，值是一个回调函数
    //子组件emit监听这个事件，并且第二个参数里就是想要携带的参数值
    //父组件这边的回调函数就能在括号里使用这个参数值
    tradeMarkInfo(trademark) {
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getData();
    },
    attrInfo(attr, attrValue) {
      //这个格式是由服务器的数据类型决定的
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      //数组去重
      if (this.searchParams.props.indexOf(props) === -1) {
        this.searchParams.props.push(props);
      }
      this.getData();
    },
    removeAttr(index) {
      this.searchParams.props.splice(index, 1);
      this.getData();
    },
    //传入的参数根据点击的li不同，flag可能有2个值
    changeOrder(flag) {
      let originOrder = this.searchParams.order;
      // originalFlag是1 originalSort是desc 这是默认值
      //但是下面重新给this.searchParams.order赋值之后，originFlag，originSort就会在页面重新渲染之后取得新值
      //至于升序降序的具体功能，那是后端完成的，不是前端的逻辑代码
      let originFlag = originOrder.split(":")[0],
        originSort = originOrder.split(":")[1],
        newOrder = "";
      if (flag == originFlag) {
        newOrder = `${originFlag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        newOrder = `${flag}:${"desc"}`;
      }
      this.searchParams.order = newOrder;
      this.getData();
    },
    //获取当前第几页
    getPageNo(pageNo) {
      this.searchParams.pageNo = pageNo;
      this.getData();
    },
  },
  watch: {
    // $route和data里的属性平级，想监听直接写
    $route(newValue, oldValue) {
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.getData();
      //换条件搜索之后，searchParams的catagoryId不会清空
      //categoryName和keyWord不重新置空很好理解，每次重新搜索都会赋值，其余的交给后端
      //而categoryId如果不置空就会被动携带
      //属性值为空的字段还是被带给服务器，但是写成undefined就不会带给服务器了
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
    },
  },
};
</script>

<style scoped>
.main {
  margin: 10px 0;
}
.main .py-container {
  width: 1200px;
  margin: 0 auto;
}
.main .py-container .bread {
  margin-bottom: 5px;
  overflow: hidden;
}
.main .py-container .bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.main .py-container .bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.main .py-container .bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
.main .py-container .bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.main .py-container .bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.main .py-container .bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.main .py-container .bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.main .py-container .bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
.main .py-container .details {
  margin-bottom: 5px;
}
.main .py-container .details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.main .py-container .details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.main .py-container .details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.main .py-container .details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.main .py-container .details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.main .py-container .details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.main .py-container .details .goods-list {
  margin: 20px 0;
}
.main .py-container .details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.main .py-container .details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img a {
  color: #666;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.main .py-container .details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.main .py-container .details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.main .py-container .details .goods-list ul li .list-wrap .price strong i {
  margin-left: -5px;
}
.main .py-container .details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.main .py-container .details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.main .py-container .details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.main .py-container .details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.main .py-container .details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.main .py-container .details .goods-list ul li .list-wrap .operate .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.main .py-container .details .goods-list ul li .list-wrap .operate .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white !important;
  text-decoration: none;
}
.main .py-container .details .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}
.main .py-container .details .page .sui-pagination {
  margin: 18px 0;
}
.main .py-container .details .page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
.main .py-container .details .page .sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
.main .py-container .details .page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.main .py-container .details .page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.main .py-container .details .page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
.main .py-container .details .page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.main .py-container .details .page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.main .py-container .details .page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
.main .py-container .details .page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}
</style>
