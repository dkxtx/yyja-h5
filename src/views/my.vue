<template>
  <div class="container">
    <van-nav-bar title="我的" />
    <div class="bg-class">
      <div class="header-class">
        <div class="header-content">
          <div class="header-desc">
            <div v-if="is_login" style="display:flex">
              <!-- <img src style="width:110px;height:110px;border-radius:55px" /> -->
              <div
                style="font-size:22px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(0,0,0,1);margin-left:10px"
              >{{user_info.nickName}}</div>
              <div class="user-tag">业主</div>
            </div>
            <div v-else style="display:flex">
              <img src="../../images/icon-user@2x.png" style="width:55px;height:55px" />
              <div
                style="font-size:22px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(0,0,0,1);margin-left:10px"
              >登录/注册</div>
            </div>
          </div>
          <div class="header-setting" @click="onClickSetting">
            <img src="../../images/icon-sz@2x.png" style="width:24px;height:24px" />
          </div>
        </div>
        <div v-if="is_login" class="header-location">
          <img
            style="width:12px;height:16px;margin-left:10px;margin-top:9px"
            src="../../images/icon-dw@2x.png"
          />
          <div class="location-class">中德英伦联邦1栋二单元1301</div>
          <div class="switch-btn" @click="onClickSwitch">切换房产</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="news-nav" @click="onClickOrder">
        <div class="news-nav-title">我的订单</div>
        <div class="news-nav-right">
          <img class="news-nav-icon" src="../../images/arrow.png" />
        </div>
      </div>
      <van-grid column-num="5">
        <van-grid-item icon="../../images/icon-dqr@2x.png" text="全部订单" @click="onClickOrder" />
        <van-grid-item icon="../../images/icon-dfk@2x.png" text="待付款" @click="onClickOrder" />
        <van-grid-item icon="../../images/icon-yfh@2x.png" text="待发货" @click="onClickOrder" />
        <van-grid-item icon="../../images/icon-dsh@2x.png" text="待收货" @click="onClickOrder" />
        <van-grid-item icon="../../images/icon-ywc@2x.png" text="已完成" @click="onClickOrder" />
      </van-grid>
      <van-cell title="我的报修" is-link icon="../../images/icon-wdbx@2x.png" @click="onClickFix" />
      <van-cell title="我的账单" is-link icon="../../images/icon-wdjf@2x.png" @click="onClickBill" />
      <van-cell title="关于" is-link icon="../../images/icon-gy@2x.png" />
      <button class="login-out-class">{{is_login==true?'退出登录':'登录/注册'}}</button>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'vant'
// import * as Common from '@/api/api'

export default {
  data () {
    return {
      is_login: false,
      user_info: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {
    onClickSetting () {},
    onClickOrder () {},
    onClickFix () {},
    onClickBill () {},
    onClickSwitch () {}
  }
}
</script>

<style scoped>
.container {
  /* width: 90%; */
  text-align: center;
  /* margin: auto; */
  /* margin-top: 200px; */
}

.bg-class {
  background-color: #f5f5f4;
  height: 100%;
  position: absolute;
  width: 100%;
}

.header-class {
  padding: 15px 15px;
  background-color: white;
}

.header-content {
  display: flex;
}

.header-desc {
  display: flex;
  width: 90%;
}

.header-setting {
  width: 10%;
}

.user-tag {
  height: 16px;
  border-radius: 2px;
  border: 1px solid rgba(205, 170, 110, 1);
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(146, 100, 47, 1);
  margin-top: 35px;
  margin-left: -35px;
}

.header-location {
  width: 395px;
  height: 34px;
  background: rgba(252, 248, 243, 1);
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  line-height: 34px;
}

.location-class {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 10px;
}

.switch-btn {
  width: 78px;
  height: 24px;
  background: rgba(229, 73, 84, 1);
  border-radius: 12px;
  margin-left: 40px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  text-align: center;
  margin-top: 5px;
}

.news-nav {
  width: 100%;
  height: 39px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.news-nav-title {
  margin-left: 15px;
  line-height: 39px;
  font-size: 14px;
  width: 100px;
  color: #333333;
}

.news-nav-right {
  display: flex;
}

.news-nav-sub {
  margin-right: 5px;
  line-height: 39px;
  font-size: 6px;
  color: #999999;
}

.news-nav-icon {
  width: 8px;
  height: 39px;
  margin-top: 0;
  margin-right: 10px;
}

.login-out-class {
  width: 100%;
  height: 39px;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(36, 36, 36, 1);
  background-color: white;
  margin-top: 50px;
}
</style>
