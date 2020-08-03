<template>
  <div class="container">
    <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft" />
    <div class="address-item">
      <div class="address">
        <van-field class="address_inp" v-model="selected_address.region" label="城市：" placeholder="请输入省市区" />
        <!-- {{selected_address.provinceName+selected_address.cityName+selected_address.countyName}} -->
        </div>
      <div class="address-detail">
        <van-field class="address_inp" v-model="selected_address.receiveAddress" label="地址：" placeholder="请输入收货地址" />
        <!-- {{selected_address.detailInfo}} -->
      </div>
      <div class="user">
        <van-field class="address_inp" v-model="selected_address.name" label="收货人姓名：" placeholder="请输入收货人姓名" />
        <!-- {{selected_address.userName}}
        <span style="margin-left:10rpx">{{selected_address.telNumber }}</span> -->
      </div>
      <div class="user">
        <van-field class="address_inp" v-model="selected_address.phone" type="tel" label="收货人电话：" placeholder="请输入收货人电话" />
      </div>
    </div>
    <div class="line"></div>
    <div class="section">
      <div style="width:10rpx;height:40rpx;background:#D5B388;margin-top:30rpx;margin-right:20rpx"></div>订单信息
    </div>
    <div class="item">
      <div class="item-left">
        <img class="store-img-class" :src="item.pic" />
      </div>
      <div class="item-right">
        <div class="list-store-name">{{item.name}}</div>
        <div
          style="word-break:break-all;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;"
        >
          <!-- <span class="store-tags" wx:for="{{item.tags}}" wx:for-item="tag" wx:key="idx1">{{tag+'、'}}</span> -->
          <span class="store-tags" v-for="(tag , idx1) in item.tags" :key="idx1">{{tag="+'、'"}}</span>
        </div>
        <div
          class="store-distance"
          style="left:115px;color:#FD6842;font-size:14px;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:rgba(253,104,66,1);"
        >￥{{item.price / 100}}</div>
        <div class="store-distance" style="display:flex;text-align:center">
          <div
            style="width:15px;height:15px;color:#262626;line-height:15px;margin-top:5px;"
            @click="onClickMinus"
          >-</div>
          <div
            style="width:50px;height:15px;background:#F2F2F2;line-height:15px;margin-top:5px;color:#262626"
          >{{goodsCount}}</div>
          <div
            style="width:15px;height:15px;color:#262626;line-height:15px;margin-top:5px;"
            @click="onClickPlus"
          >+</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-price">
        <div class="total-price">
          合计：
          <span style="color:#FD6842">￥{{totalAmount}}</span>
        </div>
        <div class="goods-count">共计{{goodsCount}}件商品</div>
      </div>
      <div class="submit-btn" @click="onClickSubmit">确认订单</div>
    </div>

    <!-- 微信支付form -->
    <form
      method="post"
      style="position: absolute; left:0; top: 0; width:0px; height:0px;"
      ref="paymentForm"
    >
      <input type="hidden" name="biz_content" ref="biz_content" />
    </form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
import querystring from 'querystring'

export default {
  data () {
    return {
      selected_address: {
        region: '',
        name: '',
        phone: '',
        receiveAddress: ''
      },
      item: {},
      goodsCount: 1,
      totalAmount: 0,
      user_info: {}
    }
  },
  computed: {},
  created () {
    this.item = this.$route.query.data
    this.totalAmount = this.item.price / 100
  },
  mounted () {
    this.user_info = JSON.parse(localStorage.getItem('user_info'))
    this.selected_address.name = this.user_info.nick_name
    let currenttotalamount = 1
    let currentprice = this.item.price
    currenttotalamount = currentprice * currenttotalamount

    this.totalAmount = currenttotalamount / 100
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/home' })
    },
    onClickMinus () {
      if (this.goodsCount === 1) {
        return Toast('购买数量不能小于1')
      }
      let currentgoodscount = this.goodsCount
      currentgoodscount -= 1

      let currenttotalamount = 0
      let currentprice = this.item.price
      currenttotalamount = currentprice * currenttotalamount

      this.goodsCount = currentgoodscount
      this.totalAmount = currenttotalamount
    },
    onClickPlus () {
      if (this.goodsCount === this.item.stock) {
        return Toast('购买数量不能大于库存')
      }
      var currentgoodscount = this.goodsCount
      currentgoodscount += 1
      var currenttotalamount = 0
      var currentprice = this.item.price
      currenttotalamount = currentprice * currentgoodscount

      this.goodsCount = currentgoodscount
      this.totalAmount = currenttotalamount / 100
    },
    onClickSubmit () {
      for (const key in this.selected_address) {
        const element = this.selected_address[key]
        if (!element) return Toast('请填写完整信息')
      }
      const self = this
      // 生成随机订单号
      const tradeNo = (new Date()).getTime()
      axios
        .get(
          `https://ah.cihangca.com/wanan/payment/sign?amount=${this.totalAmount * 100}&trade_no=${tradeNo}&open_id=232332`
        )
        .then((res) => {
          const form = res.data.form
          const content = form.biz_content
          delete form.biz_content
          const action = `https://gw.open.icbc.com.cn/ui/aggregate/payment/request/V1?${querystring.stringify(form)}`
          self.$refs['paymentForm'].action = action
          self.$refs['biz_content'].value = content
          self.$refs['paymentForm'].submit()
        })
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  margin: auto;
  /* margin-top: 200px; */
}

/* pages/home/submit/index.wxss */
.address-item {
  width: 95%;
  margin: auto;
  margin-top: 15px;
  text-align: left;
  /* padding: 15px; */
}
.address {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}
.address-detail {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
  margin-top: 10px;
}
.user {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
  margin-top: 10px;
}
.line {
  width: 100%;
  margin-top: 10px;
  height: 10px;
  background: #f5f5f4;
}

.section {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
  width: 95%;
  margin: auto;
  /* padding: 0 15px; */
  background: #ffffff;
  height: 100rpx;
  line-height: 50px;
  display: flex;
}
.item {
  margin-left: 15px;
  margin-right: 15px;
  height: 115px;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  text-align: left;
}

.item-left {
  /* flex-basis: 170rpx; */
  width: 85px;
}

.store-img-class {
  width: 85px;
  height: 85px;
  border-radius: 5px;
  margin-top: 15px;
}

.item-right {
  flex: 1;
  padding: 15px 15px;
}

.list-store-name {
  font-size: 32rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.store-tags {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.store-activity {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.store-distance {
  position: absolute;
  right: 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
  margin-top: 10px;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 50px;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #f5f5f4;
  display: flex;
  text-align: left;
}

.footer-price {
  width: 70%;
  height: 100%;
}

.submit-btn {
  width: 30%;
  height: 100%;
  background: rgba(213, 179, 136, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
  text-align: center;
}

.total-price {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(101, 102, 103, 1);
  margin-top: 5px;
  margin-left: 15px;
}

.goods-count {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(151, 152, 153, 1);
  margin-left: 15px;
  margin-top: 5px;
}

.address_inp {
  padding: 2px 0;
  margin: 15px 0;
}

.address_inp /deep/ .van-field__label {
  width: 85px;
  text-align: left;
}

.address_inp /deep/ .van-field__value {
  border-bottom: 1px solid #f5f5f4;
}
</style>
