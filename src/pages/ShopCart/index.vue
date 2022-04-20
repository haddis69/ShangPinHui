<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart, index) in cartInfoList"
          :key="cart.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              @change="updateChecked(cart, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('minus', -1, cart)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              minnum="1"
              class="itxt"
              :value="cart.skuNum"
              @change="handler('change', $event.target.value * 1, cart)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('add', 1, cart)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCart(cart)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isCheckAll&&cartInfoList.length>0" @change="updateAllChecked"/>
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}.00</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  mounted() {
    //组件挂载的时候就会发请求，向服务器要数据，遍历到标签中
    //否则页面的数据就是假的，下次刷新就回到原始值了
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getCartList");
    },
    //节流，防止用户更改过快，出现负数，服务器反应不过来
    async deleteCart(cart) {
      try {
        //有了uuid，从数据库里指定的uuid里面删这个数据，再getData获取最新数据，再遍历页面标签
        await this.$store.dispatch("deleteCartListById", cart.skuId);
        //同样是要重新发请求，前端只负责发请求，核心功能是后端来做的
        this.getData();
      } catch (error) {
        console.log(error.message);
      }
    },
    handler: throttle(async function (type, disNum, cart) {
      //这三个值是上面调用的时候传过来的，三个标签共用一个回调，根据type区分
      //disNum本质是一个数字，可以重新赋值
      switch (type) {
        case "add":
          disNum = 1;
          break;
        case "minus":
          if (cart.skuNum > 1) {
            disNum = -1;
          } else {
            disNum = 0;
          }
          break;
        case "change":
          if (isNaN(disNum) || disNum < 1) {
            disNum = 1;
          } else {
            disNum = parseInt(disNum) - cart.skuNum;
          }
          break;
      }
      try {
        //skuNum是变化的数量，比如原来有3件商品，变成5件，那么发送的就是2，这是由服务器的接口决定的
        //必须每次按键的时候重新给服务器发请求，获得响应，拿到最新数据，有了最新数据，就会遍历和计算出最新属性到标签
        await this.$store.dispatch("addOrUpdateShopCart", {
          skuId: cart.skuId,
          skuNum: disNum,
        });
        this.getData();
      } catch (error) {
        console.log(error.message);
      }
    }, 500),
    //修改勾选状态
    async updateChecked(cart, event) {
      //event.target.checked是布尔值，而带给服务器的是0或者1，所以转换一下
      //这同样需要发请求,把目前是否选中告诉服务器，服务器做出相应操作，再返回一个新的cart.isChecked，绑定给这个标签
      //这不简单是静态页面的勾选操作，再次刷新也是能保持住的
      let isChecked = event.target.checked ? 1 : 0;
      try {
        await this.$store.dispatch("updateCheck", {
          skuId: cart.skuId,
          isChecked,
        });
      } catch (error) {
        console.log(error.message);
      }
    },
    async deleteAllCheckedCart() {
      try {
        await this.$store.dispatch("deleteAllCheckedCart");
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //全选功能
    async updateAllChecked(event){
      //即使在上面不注入event，这个括号里依然可以取到
      let checked=event.target.checked?"1":"0";
      try{
        await this.$store.dispatch('updateAllIsChecked',checked);
        this.getData();
      }catch(error){
        alert(error.message);
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        sum += item.skuPrice * item.skuNum;
      });
      return sum;
    },
    isCheckAll() {
      return this.cartInfoList.every((item) => item.isChecked == 1);
    },
  },
};
</script>

<style scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
}
.cart h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart .cart-main .cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-th > div {
  float: left;
}
.cart .cart-main .cart-th .cart-th1 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th2 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th3,
.cart .cart-main .cart-th .cart-th4,
.cart .cart-main .cart-th .cart-th5,
.cart .cart-main .cart-th .cart-th6 {
  width: 12.5%;
}
.cart .cart-main .cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart .cart-main .cart-body .cart-list > li {
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 15%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 35%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con3 .item-txt {
  text-align: center;
}
.cart .cart-main .cart-body .cart-list .cart-list-con4 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 17%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  width: 13%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}
.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
}
.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .select-all span {
  vertical-align: middle;
}
.cart .cart-tool .select-all input {
  vertical-align: middle;
}
.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}
.cart .cart-tool .money-box {
  float: right;
}
.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart .cart-tool .money-box .sumbtn {
  float: right;
}
.cart .cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}
</style>
