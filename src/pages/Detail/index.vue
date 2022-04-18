<template>
  <div class="detail">
    <!-- 商品分类导航 -->
    <TypeNav />

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <span>手机、数码、通讯</span>
        <span>手机</span>
        <span>Apple苹果</span>
        <span>iphone 6S系类</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom />
          <!-- 小图列表 -->
          <ImageList />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机</h3>
            <p class="news">推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                <div class="price">
                  <i>¥</i>
                  <em>5299</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>65545</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                <div class="fixWidth">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl>
                <dt class="title">选择颜色</dt>
                <dd changepirce="0" class="active">金色</dd>
                <dd changepirce="40">银色</dd>
                <dd changepirce="90">黑色</dd>
              </dl>
              <dl>
                <dt class="title">内存容量</dt>
                <dd changepirce="0" class="active">16G</dd>
                <dd changepirce="300">64G</dd>
                <dd changepirce="900">128G</dd>
                <dd changepirce="1300">256G</dd>
              </dl>
              <dl>
                <dt class="title">选择版本</dt>
                <dd changepirce="0" class="active">公开版</dd>
                <dd changepirce="-1000">移动版</dd>
              </dl>
              <dl>
                <dt class="title">购买方式</dt>
                <dd changepirce="0" class="active">官方标配</dd>
                <dd changepirce="-240">优惠移动版</dd>
                <dd changepirce="-390">电信优惠版</dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt">
                <a href="javascript:" class="plus">+</a>
                <a href="javascript:" class="mins">-</a>
              </div>
              <div class="add">
                <a href="javascript:">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699) </div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39">
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50">
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59">
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99">
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">
                套餐价
              </div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###">
                商品介绍
              </a>
            </li>
            <li>
              <a href="###">
                规格与包装
              </a>
            </li>
            <li>
              <a href="###">
                售后保障
              </a>
            </li>
            <li>
              <a href="###">
                商品评价
              </a>
            </li>
            <li>
              <a href="###">
                手机社区
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ImageList from './ImageList/ImageList'
  import Zoom from './Zoom/Zoom'

  export default {
    name: 'Detail',
    
    components: {
      ImageList,
      Zoom
    }
  }
</script>

<style scoped>
.detail .con {
  width: 1200px;
  margin: 15px auto 0;
}
.detail .con .conPoin {
  padding: 9px 15px 9px 0;
}
.detail .con .conPoin > span + span:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #ccc;
}
.detail .con .mainCon {
  overflow: hidden;
  margin: 5px 0 15px;
}
.detail .con .mainCon .previewWrap {
  float: left;
  width: 400px;
  position: relative;
}
.detail .con .mainCon .InfoWrap {
  width: 700px;
  float: right;
}
.detail .con .mainCon .InfoWrap .InfoName {
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
}
.detail .con .mainCon .InfoWrap .news {
  color: #e12228;
  margin-top: 15px;
}
.detail .con .mainCon .InfoWrap .priceArea {
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .title {
  float: left;
  margin-right: 15px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price {
  float: left;
  color: #c81623;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price i {
  font-size: 16px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price em {
  font-size: 24px;
  font-weight: 700;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price span {
  font-size: 12px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .remark {
  float: right;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .title {
  margin-right: 15px;
  float: left;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth {
  width: 520px;
  float: left;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .red-bg {
  background: #c81623;
  color: #fff;
  padding: 3px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .t-gray {
  color: #999;
}
.detail .con .mainCon .InfoWrap .support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.detail .con .mainCon .InfoWrap .support .supportArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .support .supportArea .title {
  margin-right: 15px;
  float: left;
}
.detail .con .mainCon .InfoWrap .support .supportArea .fixWidth {
  width: 520px;
  float: left;
  color: #999;
}
.detail .con .mainCon .InfoWrap .choose .chooseArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .choose .chooseArea dl {
  overflow: hidden;
  margin: 13px 0;
}
.detail .con .mainCon .InfoWrap .choose .chooseArea dl dt {
  margin-right: 15px;
  float: left;
}
.detail .con .mainCon .InfoWrap .choose .chooseArea dl dd {
  float: left;
  margin-right: 5px;
  color: #666;
  line-height: 24px;
  padding: 2px 14px;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #eee;
}
.detail .con .mainCon .InfoWrap .choose .chooseArea dl dd.active {
  color: green;
  border: 1px solid green;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .plus,
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  right: -8px;
  top: 19px;
  border-top: 0;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .plus {
  right: -8px;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .add {
  float: left;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .add a {
  background-color: #e1251b;
  padding: 0 25px;
  font-size: 16px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
}
.detail .product-detail {
  width: 1200px;
  margin: 30px auto 0;
  overflow: hidden;
}
.detail .product-detail .aside {
  width: 210px;
  float: left;
  border: 1px solid #ccc;
}
.detail .product-detail .aside .tabWraped {
  height: 40px;
}
.detail .product-detail .aside .tabWraped h4 {
  border-top: 3px solid #fff;
  float: left;
  line-height: 37px;
  width: 105px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.detail .product-detail .aside .tabWraped h4.active {
  border-top: 3px solid #e1251b;
  border-bottom: 0;
  font-weight: normal;
}
.detail .product-detail .aside .tabContent {
  padding: 10px;
}
.detail .product-detail .aside .tabContent .tab-pane {
  display: none;
}
.detail .product-detail .aside .tabContent .tab-pane.active {
  display: block;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .partList {
  overflow: hidden;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .partList li {
  width: 50%;
  float: left;
  border-bottom: 1px dashed #ededed;
  line-height: 28px;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li {
  margin: 5px 0 15px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .p-img {
  text-align: center;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .p-img img {
  width: 152px;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .price {
  font-size: 16px;
  color: #c81623;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .operate {
  text-align: center;
  margin: 5px 0;
}
.detail .product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .operate a {
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
  display: inline-block;
  padding: 2px 14px;
  line-height: 18px;
}
.detail .product-detail .detail {
  width: 980px;
  float: right;
}
.detail .product-detail .detail .fitting {
  border: 1px solid #ddd;
  margin-bottom: 15px;
}
.detail .product-detail .detail .fitting .kt {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  padding: 5px 0 5px 15px;
}
.detail .product-detail .detail .fitting .good-suits {
  height: 170px;
  padding-top: 10px;
}
.detail .product-detail .detail .fitting .good-suits .master {
  width: 127px;
  height: 165px;
  text-align: center;
  position: relative;
  float: left;
}
.detail .product-detail .detail .fitting .good-suits .master img {
  width: 87px;
}
.detail .product-detail .detail .fitting .good-suits .master p {
  color: #c81623;
  font-size: 16px;
  font-weight: 700;
}
.detail .product-detail .detail .fitting .good-suits .master i {
  position: absolute;
  top: 48px;
  right: -25px;
  font-size: 16px;
}
.detail .product-detail .detail .fitting .good-suits .suits {
  width: 668px;
  height: 165px;
  float: left;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem {
  float: left;
  width: 127px;
  padding: 0 20px;
  text-align: center;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem img {
  width: 120px;
  height: 130px;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem p {
  font-size: 12px;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem label {
  display: block;
  position: relative;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem label input {
  vertical-align: middle;
}
.detail .product-detail .detail .fitting .good-suits .suits .suitsItem label span {
  vertical-align: middle;
}
.detail .product-detail .detail .fitting .good-suits .result {
  border-left: 1px solid #ddd;
  width: 153px;
  height: 165px;
  padding-left: 20px;
  float: left;
}
.detail .product-detail .detail .fitting .good-suits .result .num {
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.detail .product-detail .detail .fitting .good-suits .result .price-tit {
  font-weight: bold;
  margin-bottom: 10px;
}
.detail .product-detail .detail .fitting .good-suits .result .price {
  color: #B1191A;
  font-size: 16px;
  margin-bottom: 10px;
}
.detail .product-detail .detail .fitting .good-suits .result .addshopcar {
  background-color: #e1251b;
  border: 1px solid #e1251b;
  padding: 10px 25px;
  font-size: 16px;
  color: #fff;
  display: inline-block;
  box-sizing: border-box;
}
.detail .product-detail .detail .intro .tab-wraped {
  background: #ededed;
  overflow: hidden;
}
.detail .product-detail .detail .intro .tab-wraped li {
  float: left;
}
.detail .product-detail .detail .intro .tab-wraped li + li > a {
  border-left: 1px solid #ddd;
}
.detail .product-detail .detail .intro .tab-wraped li.active a {
  background: #e1251b;
  color: #fff;
}
.detail .product-detail .detail .intro .tab-wraped li a {
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 11px;
  text-align: center;
  color: #666;
  background: #fcfcfc;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.detail .product-detail .detail .intro .tab-content .tab-pane {
  display: none;
}
.detail .product-detail .detail .intro .tab-content .tab-pane.active {
  display: block;
}
.detail .product-detail .detail .intro .tab-content .tab-pane:nth-child(1) .goods-intro {
  padding-left: 10px;
}
.detail .product-detail .detail .intro .tab-content .tab-pane:nth-child(1) .goods-intro li {
  margin: 10px 0;
}
.detail .product-detail .detail .intro .tab-content .tab-pane:nth-child(1) .intro-detail img {
  width: 100%;
}

</style>