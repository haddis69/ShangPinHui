<template>
  <div>
    <div class="order-right">
      <div class="order-content">
        <div class="title">
          <h3>我的订单</h3>
        </div>
        <div class="chosetype">
          <table>
            <thead>
              <tr>
                <th width="29%">商品</th>
                <th width="31%">订单详情</th>
                <th width="13%">收货人</th>
                <th>金额</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="orders">
          <table class="order-item" v-for="(order,index) in myOrder.records" :key="order.id">
            <thead>
              <tr>
                <th colspan="5">
                  <span class="ordertitle"
                    >{{order.createTime}}   订单编号:{{order.outTradeNo}}
                    <span class="pull-right delete"
                      ><img src="../images/delete.png" /></span
                  ></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart,index) in order.orderDetailList" :key="cart.id">
                <td width="60%">
                  <div class="typographic">
                    <img :src="cart.imgUrl" style="width: 100px;height: 100px;" />
                    <a href="#" class="block-text"
                      >{{cart.skuName}}</a
                    >
                    <span>x{{cart.skuNum}}</span>
                    <a href="#" class="service">售后申请</a>
                  </div>
                </td>
                <td :rowspan="order.orderDetailList.length" width="8%" class="center" v-if="index==0">{{order.consignee}}</td>
                <td :rowspan="order.orderDetailList.length" width="13%" class="center" v-if="index==0">
                  <ul class="unstyled">
                    <li>总金额{{order.totalAmount}}</li>
                    <li>在线支付</li>
                  </ul>
                </td>
                <td :rowspan="order.orderDetailList.length" width="8%" class="center" v-if="index==0">
                  <a href="#" class="btn">{{order.orderStatusName}} </a>
                </td>
                <td :rowspan="order.orderDetailList.length" width="13%" class="center" v-if="index==0">
                  <ul class="unstyled">
                    <li>
                      <a href="mycomment.html" target="_blank">评价|晒单</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="choose-order">
          <Pagination
            :pageno="page"
            :pageSize="limit"
            :total="myOrder.total"
            :continues="5"
            @getPageNo="getPageNo"
          />
        </div>
      </div>
      <!--猜你喜欢-->
      <div class="like">
        <h4 class="kt">猜你喜欢</h4>
        <ul class="like-list">
          <li class="likeItem">
            <div class="p-img">
              <img src="../images/itemlike01.png" />
            </div>
            <div class="attr">
              <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
            </div>
            <div class="price">
              <em>¥</em>
              <i>3699.00</i>
            </div>
            <div class="commit">已有6人评价</div>
          </li>
          <li class="likeItem">
            <div class="p-img">
              <img src="../images/itemlike02.png" />
            </div>
            <div class="attr">Apple苹果iPhone 6s/6s Plus 16G 64G 128G</div>
            <div class="price">
              <em>¥</em>
              <i>4388.00</i>
            </div>
            <div class="commit">已有700人评价</div>
          </li>
          <li class="likeItem">
            <div class="p-img">
              <img src="../images/itemlike03.png" />
            </div>
            <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
            <div class="price">
              <em>¥</em>
              <i>4088.00</i>
            </div>
            <div class="commit">已有700人评价</div>
          </li>
          <li class="likeItem">
            <div class="p-img">
              <img src="../images/itemlike04.png" />
            </div>
            <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
            <div class="price">
              <em>¥</em>
              <i>4088.00</i>
            </div>
            <div class="commit">已有700人评价</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myorder",
  mounted() {
    this.getData();
  },
  data() {
    return {
      //当前第几页
      page: 1,
      //每页几条
      limit: 3,
      //存储返回值的数据
      myOrder: {},
    };
  },
  methods: {
    //发请求获取我的订单的方法
    async getData() {
      let result = await this.$API.reqMyOrderList(this.page, this.limit);
      if (result.code === 200) {
        this.myOrder = result.data;
      }
    },
    getPageNo(page){
      //分页器的复用
      //因为获取第几页数据应该是把要获取的页数带给后端，发请求完成的
      //我们复用Pagination组件 里面通过自定义事件，点击分页器的页数，触发getPageNo,把点击的页数作为形参传过来
      //这边接收形参page，再把设置好的page在本组件里发请求，获得数据
      //这就是分页器组件的复用
      this.page=page;
      this.getData();
    }
  },
};
//template里 如果出线循环套循环 表格多次无效遍历 越往后越小 就在表头加上 v-if="index==0" 遍历的时候仅第一次显示跨行的表格
</script>
<style>
  
</style>
