<template>
  <div class="bg-class">
    <van-nav-bar title="我的订单" />
    <van-tabs
      v-model="active"
      swipeable
      style="width:100%"
      animated
      color="#D5B388"
      active-color="#242424"
      @change="onChange"
    >
      <van-tab title="全部">
        <div style="width:100%;">
          <div v-if="orders.length == 0" class="no-order-class">暂无订单数据</div>
          <div
            v-for="(item,index) in orders"
            v-bind:key="index"
            @click="onClickOrder"
            style="margin-top:20rpx"
          >
            <div class="item-header">
              <img src="item.store.pic" class="store-pic" />
              <div class="store-name">item.store.name</div>
              <img class="nav-icon" src="../../images/arrow.png" />
              <div class="order-status" v-if="item.status == 1">待付款</div>
              <div class="order-status" v-if="item.status == 2">待发货</div>
              <div class="order-status" v-if="item.status == 3">待收货</div>
              <div class="order-status" v-if="item.status == 4">已完成</div>
            </div>
            <div class="item-content">
              <div class="goods">
                <img src="item.goods.pic" class="goods-pic" />
                <div class="goods-detail">
                  <div class="goods-name">{{item.goods.name}}</div>
                  <div class="goods-tags">{{item.goods.tags}}</div>
                  <div class="goods-price">￥{{item.goods.price}}</div>
                  <div class="goods-count">x{{item.goods.count}}</div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-footer-left">共{{item.goods.count}}件商品</div>
                <div class="goods-footer-right">
                  实付：
                  <text style="color:#FD6842;">￥{{item.goods.price*item.goods.count}}</text>
                </div>
              </div>
            </div>
            <div v-if="item.status == 1||item.status == 3" class="item-footer">
              <div class="footer-btn" v-if="item.status == 1">去支付</div>
              <div class="footer-btn" v-if="item.status == 3">确认收货</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div v-if="orders.length == 0" class="no-order-class">暂无订单数据</div>
        <div style="width:100%;">
          <div
            v-for="(item,index) in orders"
            v-bind:key="index"
            @click="onClickOrder"
            style="margin-top:20rpx"
          >
            <div class="item-header">
              <img src="item.store.pic" class="store-pic" />
              <div class="store-name">item.store.name</div>
              <img class="nav-icon" src="../../images/arrow.png" />
              <div class="order-status" v-if="item.status == 1">待付款</div>
              <div class="order-status" v-if="item.status == 2">待发货</div>
              <div class="order-status" v-if="item.status == 3">待收货</div>
              <div class="order-status" v-if="item.status == 4">已完成</div>
            </div>
            <div class="item-content">
              <div class="goods">
                <img src="item.goods.pic" class="goods-pic" />
                <div class="goods-detail">
                  <div class="goods-name">{{item.goods.name}}</div>
                  <div class="goods-tags">{{item.goods.tags}}</div>
                  <div class="goods-price">￥{{item.goods.price}}</div>
                  <div class="goods-count">x{{item.goods.count}}</div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-footer-left">共{{item.goods.count}}件商品</div>
                <div class="goods-footer-right">
                  实付：
                  <text style="color:#FD6842;">￥{{item.goods.price*item.goods.count}}</text>
                </div>
              </div>
            </div>
            <div v-if="item.status == 1||item.status == 3" class="item-footer">
              <div class="footer-btn" v-if="item.status == 1">去支付</div>
              <div class="footer-btn" v-if="item.status == 3">确认收货</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货">
        <div v-if="orders.length == 0" class="no-order-class">暂无订单数据</div>
        <div style="width:100%;">
          <div
            v-for="(item,index) in orders"
            v-bind:key="index"
            @click="onClickOrder"
            style="margin-top:20rpx"
          >
            <div class="item-header">
              <img src="item.store.pic" class="store-pic" />
              <div class="store-name">item.store.name</div>
              <img class="nav-icon" src="../../images/arrow.png" />
              <div class="order-status" v-if="item.status == 1">待付款</div>
              <div class="order-status" v-if="item.status == 2">待发货</div>
              <div class="order-status" v-if="item.status == 3">待收货</div>
              <div class="order-status" v-if="item.status == 4">已完成</div>
            </div>
            <div class="item-content">
              <div class="goods">
                <img src="item.goods.pic" class="goods-pic" />
                <div class="goods-detail">
                  <div class="goods-name">{{item.goods.name}}</div>
                  <div class="goods-tags">{{item.goods.tags}}</div>
                  <div class="goods-price">￥{{item.goods.price}}</div>
                  <div class="goods-count">x{{item.goods.count}}</div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-footer-left">共{{item.goods.count}}件商品</div>
                <div class="goods-footer-right">
                  实付：
                  <text style="color:#FD6842;">￥{{item.goods.price*item.goods.count}}</text>
                </div>
              </div>
            </div>
            <div v-if="item.status == 1||item.status == 3" class="item-footer">
              <div class="footer-btn" v-if="item.status == 1">去支付</div>
              <div class="footer-btn" v-if="item.status == 3">确认收货</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div v-if="orders.length == 0" class="no-order-class">暂无订单数据</div>
        <div style="width:100%;">
          <div
            v-for="(item,index) in orders"
            v-bind:key="index"
            @click="onClickOrder"
            style="margin-top:20rpx"
          >
            <div class="item-header">
              <img src="item.store.pic" class="store-pic" />
              <div class="store-name">item.store.name</div>
              <img class="nav-icon" src="../../images/arrow.png" />
              <div class="order-status" v-if="item.status == 1">待付款</div>
              <div class="order-status" v-if="item.status == 2">待发货</div>
              <div class="order-status" v-if="item.status == 3">待收货</div>
              <div class="order-status" v-if="item.status == 4">已完成</div>
            </div>
            <div class="item-content">
              <div class="goods">
                <img src="item.goods.pic" class="goods-pic" />
                <div class="goods-detail">
                  <div class="goods-name">{{item.goods.name}}</div>
                  <div class="goods-tags">{{item.goods.tags}}</div>
                  <div class="goods-price">￥{{item.goods.price}}</div>
                  <div class="goods-count">x{{item.goods.count}}</div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-footer-left">共{{item.goods.count}}件商品</div>
                <div class="goods-footer-right">
                  实付：
                  <text style="color:#FD6842;">￥{{item.goods.price*item.goods.count}}</text>
                </div>
              </div>
            </div>
            <div v-if="item.status == 1||item.status == 3" class="item-footer">
              <div class="footer-btn" v-if="item.status == 1">去支付</div>
              <div class="footer-btn" v-if="item.status == 3">确认收货</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div v-if="orders.length == 0" class="no-order-class">暂无订单数据</div>
        <div style="width:100%;">
          <div
            v-for="(item,index) in orders"
            v-bind:key="index"
            @click="onClickOrder"
            style="margin-top:20rpx"
          >
            <div class="item-header">
              <img src="item.store.pic" class="store-pic" />
              <div class="store-name">item.store.name</div>
              <img class="nav-icon" src="../../images/arrow.png" />
              <div class="order-status" v-if="item.status == 1">待付款</div>
              <div class="order-status" v-if="item.status == 2">待发货</div>
              <div class="order-status" v-if="item.status == 3">待收货</div>
              <div class="order-status" v-if="item.status == 4">已完成</div>
            </div>
            <div class="item-content">
              <div class="goods">
                <img src="item.goods.pic" class="goods-pic" />
                <div class="goods-detail">
                  <div class="goods-name">{{item.goods.name}}</div>
                  <div class="goods-tags">{{item.goods.tags}}</div>
                  <div class="goods-price">￥{{item.goods.price}}</div>
                  <div class="goods-count">x{{item.goods.count}}</div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-footer-left">共{{item.goods.count}}件商品</div>
                <div class="goods-footer-right">
                  实付：
                  <text style="color:#FD6842;">￥{{item.goods.price*item.goods.count}}</text>
                </div>
              </div>
            </div>
            <div v-if="item.status == 1||item.status == 3" class="item-footer">
              <div class="footer-btn" v-if="item.status == 1">去支付</div>
              <div class="footer-btn" v-if="item.status == 3">确认收货</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      orders: [],
      active: 0
    }
  },
  computed: {},
  created () {
    let data = this.$route.params.option
    this.active = parseInt(data)
  },
  mounted () {},
  methods: {
    onChange () {}
  }
}
</script>

<style scoped>
.bg-class {
  background-color: #f5f5f4;
  height: 100%;
  width: 100%;
  position: absolute;
}

.item-header {
  /* width: 100%; */
  height: 80rpx;
  display: flex;
  background-color: white;
  padding: 0 30rpx;
  border-bottom: 1rpx solid rgba(235, 235, 235, 1);
}

.store-pic {
  width: 48rpx;
  height: 30rpx;
  margin-top: 25rpx;
}

.store-name {
  height: 30rpx;
  line-height: 30rpx;
  margin-top: 25rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 10rpx;
}

.nav-icon {
  width: 16rpx;
  height: 78rpx;
  margin-top: 0rpx;
  margin-left: 20rpx;
}

.order-status {
  flex: 1;
  height: 30rpx;
  line-height: 30rpx;
  margin-top: 25rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(253, 104, 66, 1);
  text-align: right;
  /* margin-right: 60rpx; */
}

.item-content {
  width: 100%;
  height: 310rpx;
  background-color: white;
}

.goods {
  width: 100%;
  height: 230rpx;
  border-bottom: 1rpx solid rgba(235, 235, 235, 1);
  display: flex;
}

.goods-pic {
  width: 170rpx;
  height: 170rpx;
  background: rgba(247, 247, 247, 1);
  border-radius: 10rpx;
  margin-top: 30rpx;
  margin-left: 30rpx;
}

.goods-detail {
  padding: 30rpx 10rpx;
  width: 70%;
}

.goods-name {
  font-size: 32rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  /* margin-top: 30rpx; */
  /* margin-left: 10rpx; */
}

.goods-tags {
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-right: 30rpx;
  margin-top: 10rpx;
}

.goods-price {
  font-size: 28rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(253, 104, 66, 1);
  margin-top: 30rpx;
}

.goods-count {
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
  position: absolute;
  right: 30rpx;
  margin-top: -30rpx;
}

.goods-footer {
  width: 100%;
  height: 80rpx;
  border-bottom: 1rpx solid rgba(235, 235, 235, 1);
  display: flex;
}

.goods-footer-left {
  width: 45%;
  margin-left: 30rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.goods-footer-right {
  width: 45%;
  margin-right: 30rpx;
  text-align: right;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.item-footer {
  /* width: 100%; */
  height: 100rpx;
  background-color: white;
  border-bottom: 1rpx solid rgba(235, 235, 235, 1);
  padding: 20rpx 30rpx 0 0;
  text-align: right;
}

.footer-btn {
  text-align: center;
  width: 180rpx;
  height: 60rpx;
  background: rgba(213, 179, 136, 1);
  border-radius: 10rpx;
  line-height: 60rpx;
  font-size: 32rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  float: right;
  /* position: absolute;
  right: 30rpx; */
}

.no-order-class {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(101, 102, 103, 1);
  height: 400px;
}
</style>
