<template>
  <div class="container">
    <van-nav-bar title="商家详情" left-arrow @click-left="onClickLeft" />
    <div class="store-name">{{store.name}}</div>
    <div class="banner">
      <div style="width: 100%;display:flex">
        <img  :src="store.logo" class="scroll-div-item_H" />
      </div>
    </div>
    <div class="address">
      <div class="address-desc">
        <div>{{store.province+store.city+store.district+store.address}}</div>
        <div style="margin-top:10rpx">营业时间 {{store.start_time+"-"+store.end_time}}</div>
      </div>
      <div class="phone" >
        <img src="../../images/icon-phone@2x.png" style="width:14px;height:14px" />
        <div>
          <a style="color: #333333;" :href="'tel:'+store.phone">联系商家</a>
        </div>
      </div>
    </div>
    <div class="section">商品列表</div>
    <div class="item" v-for="(item , index) in goods_list" :key="index" @click="onClickGoods(item)">
      <div class="item-left">
        <img :src="item.pic[0]" class="store-img-class" />
      </div>
      <div class="item-right">
        <div class="list-store-name">{{item.name}}</div>
        <div style="word-break:break-all;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;">
          <span class="store-tags">{{item.intro}}</span>
        </div>
        <div>
          <span class="store-activity">{{item.open_time}}</span>
        </div>
        <div class="store-distance" style="left:115px;color:#FD6842;font-size:14px;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:rgba(253,104,66,1);">￥{{item.price}}</div>
        <div class="store-distance">销售{{item.sales}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
// import * as Common from '@/api/api'
import axios from 'axios'

export default {
  data () {
    return {
      store: {
        // address: '天府三街迈普大厦',
        // city: '成都',
        // created: '2020-04-01T15:22:51+08:00',
        // district: '武侯区',
        // end_time: '22:00',
        // id: 1,
        // latitude: 30.588447,
        // logo: 'https://gd1.alicdn.com/imgextra/i1/165218339/O1CN01NpYs7K2BTJOHVPKqr_!!165218339.jpg_400x400.jpg',
        // longitude: 104.111426,
        // name: '好利来',
        // pc_id: 1,
        // phone: "'18583750607",
        // province: '四川',
        // start_time: '7:00'
      },
      banners: [],
      goods_list: [
        // {
        //   id: 1,
        //   store_id: '1',
        //   name: '10英寸水果蛋糕',
        //   intro: '白色浪漫、四重奏、交响乐团、粉红豹',
        //   detail:
        //     '"<div class="MsgHistory"><img src="https://img.alicdn.com/imgextra/i4/165218339/O1CN01jkBtyc2BTJNQimS9J_!!165218339.jpg" align="absmiddle" data-spm-anchor-id="2013.1.0.i0.2e5b53fdtQxkr0" /></div>\n<div class="MsgHistory"><img src="https://img.alicdn.com/imgextra/i1/165218339/O1CN010bbCzd2BTJOEEnPRv_!!165218339.jpg" align="absmiddle" /><img src="https://img.alicdn.com/imgextra/i1/165218339/O1CN01MrbOEk2BTJOFZcenv_!!165218339.jpg" align="absmiddle" /><img src="https://img.alicdn.com/imgextra/i2/165218339/O1CN01Z4dWU42BTJOHtV9ZP_!!165218339.jpg" align="absmiddle" /></div>\n<div class="MsgHistory"><img class="" src="https://img.alicdn.com/imgextra/i1/165218339/O1CN01gBeJ9T2BTJNQsv9sg_!!165218339.jpg" align="absmiddle" /></div>"',
        //   price: 34,
        //   sales: 23,
        //   stock: 1000,
        //   pic: [
        //     'https://gd1.alicdn.com/imgextra/i1/165218339/O1CN01xZCayZ2BTJOKbL8Y4_!!165218339.jpg',
        //     'https://gd1.alicdn.com/imgextra/i1/165218339/O1CN01NpYs7K2BTJOHVPKqr_!!165218339.jpg_400x400.jpg'
        //   ],
        //   created: '2020-04-01T15:22:51+08:00'
        // }
      ]
    }
  },
  computed: {},
  mounted () {
    console.log(this.$route.query.data)
    this.store = JSON.parse(this.$route.query.data)
    console.log(this.store.id)
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      const data = {
        store_id: this.store.id
      }
      axios.post('https://sc.bzamo.com/wawy/user/store/goods', data).then((response) => {
        this.goods_list = response.data.data
        console.log(response.data.data)
      }).catch((error) => {
        Toast({
          message: error.message,
          duration: '500'
        })
      })
    },
    onClickLeft () {
      this.$router.push({path: '/home'})
    },
    onClickGoods (goods) {
      console.log(goods)
      this.$router.push({path: '/goods',
        query: {
          data: goods,
          store: JSON.stringify(this.store)
        }})
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  margin: auto;
  /* background-color: red; */
  /* margin-top: 200px; */
}
/* pages/home/store/index.wxss */
.store-name {
  /* width: 100%; */
  /* padding: 15px; */
  margin-top: 15px;
  margin-left: 15px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
  text-align: left;
}

.banner {
  width: 100%;
  height: 90px;
}

.scroll-view_H {
  white-space: nowrap;
}
.scroll-view-item {
  height: 90px;
}
.scroll-div-item_H {
  display: inline-block;
  height: 90px;
  width: 120px;
  margin-left: 15px;
  border-radius: 5px;
}

.address {
  width: 90%;
  padding: 15px 15px 15px 15px;
  display: flex;
}

.address-desc {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(50, 51, 52, 1);
  text-align: left
}

.phone {
  position: absolute;
  right: 15px;
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
  text-align: center;
  margin-top:10px;
}

.section {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
  width: 100%;
  /* padding: 0 15px; */
  background: #ebebeb;
  height: 50px;
  line-height: 50px;
}

.item {
  margin-left: 15px;
  margin-right: 15px;
  height: 115px;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
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
  text-align: left;
}

.list-store-name {
  font-size: 16px;
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
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
  margin-top: 10px;
}
</style>
