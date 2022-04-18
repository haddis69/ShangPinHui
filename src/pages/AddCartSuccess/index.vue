<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img src="good.skuDefaultImg">
          </div>
          <div class="right-info">
            <p class="title">小米红米 Redmi note8 手机 梦幻蓝 全网通(4GB+64GB)</p>
            <p class="attr">颜色：WFZ5099IH/5L钛金釜内胆 数量：2</p>
          </div>
        </div>
        <div class="right-gocart">
          <a href="javascript:" class="sui-btn btn-xlarge">查看商品详情</a>
          <a href="javascript:" >去购物车结算 > </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddCartSuccess',
  }
</script>

<style scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;
}
.cart-complete-wrap .cart-complete {
  width: 1200px;
  margin: 0 auto;
}
.cart-complete-wrap .cart-complete h3 {
  font-weight: 400;
  font-size: 16px;
  color: #6aaf04;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0;
}
.cart-complete-wrap .cart-complete h3 .icon-pc-right {
  background-color: #fff;
  border: 2px solid #6aaf04;
  padding: 3px;
  margin-right: 8px;
  border-radius: 15px;
}
.cart-complete-wrap .cart-complete .goods {
  overflow: hidden;
  padding: 10px 0;
}
.cart-complete-wrap .cart-complete .goods .left-good {
  float: left;
}
.cart-complete-wrap .cart-complete .goods .left-good .left-pic {
  border: 1px solid #dfdfdf;
  width: 60px;
  float: left;
}
.cart-complete-wrap .cart-complete .goods .left-good .left-pic img {
  width: 60px;
  height: 60px;
}
.cart-complete-wrap .cart-complete .goods .left-good .right-info {
  color: #444;
  float: left;
  margin-left: 10px;
}
.cart-complete-wrap .cart-complete .goods .left-good .right-info .title {
  width: 100%;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.cart-complete-wrap .cart-complete .goods .left-good .right-info .attr {
  color: #aaa;
}
.cart-complete-wrap .cart-complete .goods .right-gocart {
  float: right;
}
.cart-complete-wrap .cart-complete .goods .right-gocart a {
  padding: 7px 36px;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  background-color: #eee;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
}
.cart-complete-wrap .cart-complete .goods .right-gocart a:hover {
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
}
.cart-complete-wrap .cart-complete .goods .right-gocart a:active {
  background-color: #e1e1e1;
  border: 1px solid #d5d5d5;
}
.cart-complete-wrap .cart-complete .goods .right-gocart .btn-danger {
  background-color: #e1251b;
  color: #fff;
}
.cart-complete-wrap .cart-complete .goods .right-gocart .btn-danger:hover {
  background-color: #e1251b;
}

</style>