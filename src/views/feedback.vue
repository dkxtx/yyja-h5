
<template>
  <div class="container">
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft"  />
    <div class="text_box">
      <!-- <textarea class="text_area" value="{{service}}" maxlength="500" placeholder="问题描述的越清楚越好喔" placeholder-class="text_placeholder" bindinput="textInp"></textarea> -->
      <van-field v-model="message" rows="5" autosize  type="textarea" placeholder="请输入留言" class="text_area"  :maxlength="500" show-word-limit/>
      <!-- <div class="text_count">{{text_count}}/500</div> -->
    </div>
    <van-button @click="sureSend" style="width: 90%;" class="send_btn">提交</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      text_count: 0,
      service: '',
      message: ''
    }
  },
  mounted () {

  },
  methods: {
    sureSend () {

    },
    onClickLeft () {
      this.$router.push({
        name: 'my'
      })
    }
  }
}
</script>

<style>
/* pages/home/service/index.wxss */
.container {
  width: 100%;
  margin: auto;
  text-align: center;
  /* margin-top: 200px; */
}

.text_box {
  margin-top: 20rpx;
}

.text_area {
  width: 90%;
  margin: auto;
  background: rgba(245, 245, 244, 1);
  border-radius: 10rpx 10rpx 0 0;
  padding: 20rpx;
  height: 100px;
  margin-top: 10px;
}

.text_placeholder {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
}

.text_count {
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
  width: 92.5%;
  margin: auto;
  padding: 10rpx 0;
  padding-right: 20rpx;
  background: rgba(245, 245, 244, 1);
  text-align: right;
  border: 0 0 10rpx 10rpx;
}

.send_btn {
  height: 100rpx;
  background: rgba(213, 179, 136, 1);
  border-radius: 8rpx;
  font-size: 36rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 70rpx;
  /* margin-top: 100rpx; */
  margin-top: 10px;
}

.send_btn::after {
  border-width: 0;
}

.top_box {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: auto;
  align-items: center;
}

.top_btn {
  height: 70rpx;
  background-color: #f4f9fa;
  margin: 30rpx 1.5% 30rpx 1.5%;
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(36, 36, 36, 1);
  line-height: 40rpx;
  border-radius: 40rpx;
}

.top_btn::after {
  border-width: 0;
}
</style>
