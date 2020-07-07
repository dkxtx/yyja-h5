<template>
  <div class="container">
    <van-nav-bar title="周边商家" />
    <div class="store">
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
  </div>
</template>

<script>
// import { Toast } from 'vant'
// import { Toast } from 'vant'
import * as Common from '@/api/api'

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
      ]
    }
  },
  computed: {
  },
  mounted () {
    // const AppId = 'wxe5c85934d893dd13'
    // const local = window.location.href
    // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + AppId + '&redirect_uri=' + encodeURIComponent(local) + 'response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    // console.log(this.$route.query.data)
    // Toast(this.$route)
    this.getStores()
  },
  methods: {
    getStores () {
      Common.userStores().then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
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
