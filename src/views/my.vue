<template>
  <div class="container">
    <van-nav-bar title="我的" />
    <div class="header_box" style="padding-bottom:20px;" @click="register">
      <img class="header_logo" src="../../images/icon-user@2x.png" alt />
      <div class="center_box" v-if="is_login">
        <div class="header_text">{{user_info.name}}</div>
        <div class="label_text" style="width:33px;">业主</div>
      </div>
      <div class="center_box" v-else>
        <div class="header_text">登录/注册</div>
      </div>
      <!-- <img class="set_icon" src="../../images/icon-sz@2x.png" alt /> -->
    </div>

    <div class="boarder"  v-if="is_login">
      <div class="boarder-item" @click="onClickMyHouse">
        <div style="margin-top:10px">
          <img src="@/../images/icon-wdxq@2x.png" style="width:16px;height:16px" alt="">
          <span style="font-size:16px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(51,51,51,1);">我的房屋</span>
        </div>
        <div style="font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(198,172,119,1);margin-top:5px">点击进入</div>
      </div>
        <div class="boarder-item" style="margin-left:20px" @click="onClickMyWallet">
        <div style="margin-top:10px">
          <img src="@/../images/icon-wdqb@2x.png" style="width:16px;height:16px" alt="">
          <span style="font-size:16px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(51,51,51,1);">我的钱包</span>
        </div>
        <div style="font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(198,172,119,1);margin-top:5px">0.00元</div>
      </div>
    </div>
    <!-- <div v-if="is_login" class="location_box">
      <div class="header-location">
        <img class="location_icon" src="../../images/icon-dw@2x.png" />
        <div class="location-class">中德英伦联邦1栋二单元1301</div>
        <div class="switch-btn" @click="onClickSwitch">切换房产</div>
      </div>
    </div>-->
    <div class="line"></div>
    <div class="news-nav" @click="onClickOrder(0)">
      <div class="news-nav-title">我的订单</div>
      <img class="news-nav-icon" src="../../images/arrow.png" />
    </div>
    <div class="icon_all">
      <div class="icon_box" @click="onClickOrder(0)">
        <img class="icon_class" src="../../images/icon-dqr@2x.png" alt srcset />
        <div class="icon_text">全部订单</div>
      </div>
      <div class="icon_box" @click="onClickOrder(1)">
        <img class="icon_class" src="../../images/icon-dfk@2x.png" alt srcset />
        <div class="icon_text">待付款</div>
      </div>
      <div class="icon_box" @click="onClickOrder(2)">
        <img class="icon_class" src="../../images/icon-yfh@2x.png" alt srcset />
        <div class="icon_text">待发货</div>
      </div>
      <div class="icon_box" @click="onClickOrder(3)">
        <img class="icon_class" src="../../images/icon-dsh@2x.png" alt srcset />
        <div class="icon_text">待收货</div>
      </div>
      <div class="icon_box" @click="onClickOrder(4)">
        <img class="icon_class" src="../../images/icon-ywc@2x.png" alt srcset />
        <div class="icon_text">已完成</div>
      </div>
    </div>
    <div class="line" style="height:40px"></div>
    <!-- <div class="list_box">
      <div class="box">
        <img class="box_icon" src="../../images/icon-wdbx@2x.png" alt />
        <div class="box_title">我的报修</div>
        <img class="box_arrow" src="../../images/arrow.png" alt srcset />
      </div>
      <div class="box">
        <img class="box_icon" src="../../images/icon-wdjf@2x.png" alt />
        <div class="box_title">我的账单</div>
        <img class="box_arrow" src="../../images/arrow.png" alt srcset />
      </div>
      <div class="box">
        <img class="box_icon" src="../../images/icon-gy@2x.png" alt />
        <div class="box_title">关于</div>
        <img class="box_arrow" src="../../images/arrow.png" alt srcset />
      </div>
    </div>
    <div class="line" style="height:40px"></div>-->
    <button class="login-out-class" @click="loginOut">{{is_login==true?'退出登录':'登录/注册'}}</button>
    <div>{{resultPath2}}</div>
    <div>{{code}}</div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
import $ from 'jquery'
import {getAccessToken} from '../api/api'

export default {
  data () {
    return {
      is_login: false,
      user_info: {
        name: '张劲松'
      },
      resultPath2: '',
      code: ''
    }
  },
  created () {
    this.resultPath2 = window.location.href
    if (window.location.href.indexOf('?') !== -1) {
      const url = window.location.href
      Toast({
        message: url,
        duration: 5000
      })
      const code = url.substring(url.indexOf('?') + 1, url.indexOf('#')).split('&')[0].split('=')[1]
      Toast({
        message: code,
        duration: 10000
      })
      this.code = code
      this.getToken(code)
    }
    // this.getToken('023KxfGb06PaQy1xQOGb0kuXFb0KxfGv')
  },
  computed: {},
  mounted () {
    // this.getToken()
    getAccessToken().then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
    // this.resultPath2 = window.location.href
    // if (window.location.href.indexOf('?') !== -1) {
    //   const url = window.location.href
    //   Toast({
    //     message: url,
    //     duration: 5000
    //   })
    //   const code = url.substring(url.indexOf('?') + 1, url.indexOf('#')).split('&')[0].split('=')[1]
    //   Toast({
    //     message: code,
    //     duration: 5000
    //   })
    //   this.code = code
    //   this.getToken(code)
    // }
  },
  methods: {
    onClickOrder (e) {
      this.$router.push({
        name: 'order',
        params: {
          option: e
        }
      })
    },
    getToken (code) {
      // const response = window.location.replace(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=${code}&grant_type=authorization_code`)
      // Toast({
      //   message: 'token',
      //   duration: 5000
      // })
      // window.location.href = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=' + code + '&grant_type=authorization_code'
      // axios.create({
      //   baseURL: 'https://api.weixin.qq.com',
      //   timeout: 1000,
      //   headers: {'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': '*'},
      //   xhrFields: {
      //     withCredentials: false
      //   }
      // })
      // axios.get('https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=' + code + '&grant_type=authorization_code')
      //   .then((response) => {
      //     // this.response = JSON.stringify(response)
      //     Toast(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //     // this.error = JSON.stringify(error)
      //   })

      // axios({
      //   method: 'get',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   dataType: 'jsonp',
      //   jsonp: 'callback',
      //   jsonpCallback: 'jsonpCallback',
      //   url: ' https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df',
      //   // url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=' + code + '&grant_type=authorization_code',
      //   params: {}
      // }).then(res => {
      //   Toast({
      //     message: JSON.stringify(res),
      //     duration: 5000
      //   })
      // }).catch(err => {
      //   Toast({
      //     message: JSON.stringify(err),
      //     duration: 5000
      //   })
      // })

      $.ajax({
        url: 'http://192.168.51.53:9001/wawy/user/wx/accesstoken',
        // url: ' https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df',
        // url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=' + code + '&grant_type=authorization_code',
        type: 'get',
        // dataType: 'jsonp',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback',
        beforeSend: function () {
          console.log('努力查询中，请稍后')
          Toast({
            message: '努力查询中，请稍后',
            duration: 500
          })
        },
        success: function (data) {
          console.log(data)
          Toast({
            message: 'success' + JSON.stringify(data),
            duration: 5000
          })
        },
        error: function (err) {
          console.log('查询失败')
          Toast({
            message: '查询失败' + JSON.stringify(err),
            duration: 5000
          })
        }
      })

      // var target = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx54d6bcf1415974fb&secret=07f9a553a3922cbf079a41df861e67df&code=' + code + '&grant_type=authorization_code'
      // $.ajax({// 2.通过code换取网页授权access_token
      //   url: 'http://query.yahooapis.com/v1/public/yql', // 雅虎代理url
      //   dataType: 'jsonp', // 雅虎代理数据格式
      //   data: {
      //     q: "select * from json where url=\'" + target + "'",
      //     // 代理返回格式
      //     format: 'json'
      //   },
      //   success: function (data) {
      //     alert('请求成功')
      //     alert('openid:' + data.query.results.json.openid)
      //     console.log('openid:' + data.query.results.json.openid)
      //   }
      // })
    },
    getUserInfo () {
      window.location.replace(`https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN`)
    },
    loginOut () {
      if (!this.is_login) {
        const url = encodeURIComponent('https://wa.cihangca.com/#/my')
        window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx54d6bcf1415974fb&redirect_uri=` + url + `&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`)
        // this.resultQuery = JSON.stringify(this.$route.query)
        // this.resultParam = JSON.stringify(this.$route.params)
        this.is_login = true
        return
      }
      this.is_login = false
    },
    register () {

    },
    onClickMyWallet () {
      window.location.href = 'https://yyja.bzamo.com/#/'
    },
    onClickMyHouse () {}
  }
}
</script>

<style scoped>
.header_box {
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.header_logo {
  width: 56px;
  height: 56px;
}

.center_box {
  margin-left: 10px;
  flex: 1;
}

.header_text {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}

.label_text {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(146, 100, 47, 1);
  padding-left: 6px;
  border-radius: 2px;
  border: 1px solid rgba(205, 170, 110, 1);
  margin-top: 6px;
}

.set_icon {
  width: 24px;
  height: 24px;
}

.location_box {
  width: 95%;
  margin: auto;
  padding-bottom: 20px;
}

.header-location {
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(252, 248, 243, 1);
  border-radius: 5px;
}

.location_icon {
  width: 12px;
  height: 16px;
  margin-left: 10px;
}

.location-class {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 5px;
  flex: 1;
}

.switch-btn {
  background: rgba(229, 73, 84, 1);
  border-radius: 12px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 2px 8px;
  margin-right: 20px;
}

.line {
  width: 100%;
  height: 10px;
  background: #ebebeb;
}

.news-nav {
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
}

.news-nav-title {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(36, 36, 36, 1);
  flex: 1;
}

.news-nav-icon {
  width: 9px;
  height: 12px;
  margin-right: 10px;
}

.icon_all {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.icon_box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon_class {
  width: 32px;
  height: 32px;
}

.icon_text {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  margin-top: 6px;
}

.list_box {
  width: 95%;
  margin: auto;
}

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 15px 0;
}

.box_icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.box_title {
  flex: 1;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(36, 36, 36, 1);
}

.box_arrow {
  width: 9px;
  height: 12px;
  margin-right: 10px;
}

.login-out-class {
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 10px 0;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  background: #d5b388;
  text-align: center;
  border-width: 0;
  margin-top: 20px;
  border-radius: 10px;
}

.boarder{
  width: 90%;
  margin-left: 5%;
  height: 65px;
  /* padding: 15px; */
  text-align: center;
  display: flex;
  padding-bottom: 15px;
}

.boarder-item{
  width: 50%;
  height: 100%;
  /* background-image: url('/@/images/img-wd-bj@2x.png') no-repeat center; */
  background:linear-gradient(360deg,rgba(252,243,236,1) 0%,rgba(252,243,236,0.66) 100%);
  border-radius: 5px;
}
</style>
