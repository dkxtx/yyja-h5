<template>
  <div class="container">
    <van-nav-bar :title="from_my_page ? '推荐商家' : '商家'" left-arrow @click-left="onClickLeft"/>
    <div class="store" v-if="store_list.length != 0">
      <div class="item" v-for="(item , index) in store_list" :key="index" @click="onClickStore(item)">
      <div class="item-left">
       <img :src="item.logo" class="store-img-class" />
      </div>
      <div class="item-right">
        <div class="store-name">{{item.name}}</div>
        <div style="margin-top:10rpx">
          <span class="store-tags" >{{item.address}}</span>
        </div>
        <div style="margin-top:10rpx">
           <span class="store-activity" v-for="(activity , idx2) in item.activities" :key="idx2">{{activity}}</span>
        </div>
        <!-- <div class="store-distance">{{item.distance_display}}m</div> -->
      </div>
    </div>
    </div>
    <div v-else style="margin-top:50px;text-align:center;color: rgba(102, 103, 104, 1);">暂无数据</div>
  </div>
</template>

<script>

import { Toast } from 'vant'
import axios from 'axios'
// import wx from 'weixin-js-sdk'

export default {
  data () {
    return {
      latitude: '',
      longitude: '',
      store_list: [
        // {
        //   address: '天府三街迈普大厦',
        //   city: '成都',
        //   created: '2020-04-01T15:22:51+08:00',
        //   district: '武侯区',
        //   end_time: '22:00',
        //   id: 1,
        //   latitude: 30.588447,
        //   logo: 'https://gd1.alicdn.com/imgextra/i1/165218339/O1CN01NpYs7K2BTJOHVPKqr_!!165218339.jpg_400x400.jpg',
        //   longitude: 104.111426,
        //   name: '好利来',
        //   pc_id: 1,
        //   phone: "'18583750607",
        //   province: '四川',
        //   start_time: '7:00'
        // }
      ],
      from_my_page: false
    }
  },
  computed: {
  },
  mounted () {
    console.log(this.$route.query)
    if (this.$route.query.data === 'from_my') {
      this.from_my_page = true
    } else {
      this.from_my_page = false
    }
    this.getStores()

    // wx.config({
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: 'wx54d6bcf1415974fb', // 必填，公众号的唯一标识
    //   timestamp: new Date(), // 必填，生成签名的时间戳
    //   nonceStr: this.randomString(), // 的随必填，生成签名机串
    //   signature: this.randomString(), // 必填，签名
    //   jsApiList: [
    //     'checkJsApi',
    //     'openLocation',
    //     'getLocation'
    //   ] // 必填，需要使用的JS接口列表
    // })
    // wx.ready(function () {
    //   // 基础接口判断当前客户端版本是否支持指定JS接口
    //   wx.checkJsApi({
    //     jsApiList: [
    //       'getLocation'
    //     ],
    //     success: function (res) {
    //       // alert(JSON.stringify(res));
    //       // alert(JSON.stringify(res.checkResult.getLocation));
    //       if (res.checkResult.getLocation === false) {
    //         alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！')
    //       }
    //     }
    //   })
    //   // 微信获取地理位置并拉取用户列表（用户允许获取用户的经纬度）
    //   wx.getLocation({
    //     success: function (res) {
    //       var latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
    //       var longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
    //       alert(latitude + '======' + longitude)
    //       console.log(latitude + '======' + longitude)
    //       // $.ajax({
    //       //   url: 'ajax.php?act=shoplist',
    //       //   data: {latitude: latitude, longitude: longitude},
    //       //   cache: false,
    //       //   async: true,
    //       //   type: 'POST',
    //       //   dataType: 'text',
    //       //   success: function (result) {
    //       //     console.log('111111')
    //       //   // alert(result);
    //       //   }
    //       // })
    //     },
    //     cancel: function (res) {
    //       alert('111111111')
    //     }
    //   })
    // })
  },
  methods: {
    onClickLeft () {
      this.$router.back()
      // this.$router.push({
      //   path: '/my'
      // })
    },

    randomString (len) {
      len = len || 32
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length
      var pwd = ''
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    },
    getStores () {
      // wx.config({
      //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //   appId: '', // 必填，公众号的唯一标识
      //   timestamp: new Date(), // 必填，生成签名的时间戳
      //   nonceStr: '', // 必填，生成签名的随机串
      //   signature: '', // 必填，签名
      //   jsApiList: [] // 必填，需要使用的JS接口列表
      // })
      var requestUrl = ''
      if (this.$route.query.data) {
        requestUrl = 'https://sc.bzamo.com/wawy/user/recommend/stores'
      } else {
        requestUrl = 'https://sc.bzamo.com/wawy/user/stores?c_id=' + this.$route.query.id
      }
      axios.get(requestUrl).then((response) => {
        this.store_list = response.data.data
        // if (this.store_list.length === 0) {
        //   Toast('暂无店铺')
        // }
      }).catch((error) => {
        Toast({
          message: error.message,
          duration: '500'
        })
      })
    },
    onClickStore (store) {
      this.$router.push({
        path: '/store',
        query: {
          data: JSON.stringify(store)
        }
      })
    },
    distance: function (la1, lo1, la2, lo2) {
      var La1 = la1 * Math.PI / 180.0
      var La2 = la2 * Math.PI / 180.0
      var La3 = La1 - La2
      var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)))
      s = s * 6378.137
      s = Math.round(s * 10000) / 10000
      s = s.toFixed(2)
      return s
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
.item {
    margin-left: 15px;
    margin-right: 15px;
    height: 115px;
    display: flex;
    border-bottom: 1px solid #F0F0F0;
}

.item-left {
    /* flex-basis: 170rpx; */
    width: 85px;
}

.store-img-class{
    background:red;
    width:85px;
    height:85px;
    border-radius:5px;
    margin-top:15px;
}

.item-right {
    padding: 15px 15px;
}

.store-name{
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: left;
}

.store-tags{
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,103,104,1);
    margin-right: 10rpx;
}

.store-activity{
    border-radius:2px;
    border:1px solid rgba(213,179,136,1);
    font-size:10px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(213,179,136,1);
    margin-right: 5px;
    padding: 0 5px;
}

.store-distance{
    position: absolute;
    right: 15px;
    font-size:13px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(195,195,195,1);
}
</style>
