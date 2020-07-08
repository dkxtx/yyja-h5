<template>
  <div class="page">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />
    <div class="header_box">
      <div class="lunbo">
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in goodData.pic" :key="index">
            <img class="lunbo_img" :src="item" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="goodDetail">
        <div class="detail_title">{{goodData.name}}</div>
        <div class="detail_content">{{goodData.intro}}</div>
        <div class="detail_count">销量 {{goodData.sales}}</div>
        <div class="detail_fee">
          <div class="fee">￥ {{goodData.price}}</div>
          <button class="pay_btn" @click="surePay">立即购买</button>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom_box">
      <div class="bottom_title">
        <div class="bottom_line"></div>
        <div class="bottom_text">商品详情</div>
      </div>
      <div ref="goods_container" class="goods_page"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      goodData: {},
      pageData: '',
      store: {}
    }
  },
  computed: {},
  created () {
    this.goodData = this.$route.query.data
    // console.log(JSON.stringify(this.goodData))
    // if (localStorage.getItem('pageData')) {
    this.pageData = this.goodData.detail.replace(
      /<img/g,
      '<img style="width:100%;"'
    )
    // } else {
    //   localStorage.setItem('pageData', this.goodData.detail)
    //   this.pageData = this.goodData.detail.replace(
    //     /<img/g,
    //     '<img style="width:100%;"'
    //   )
    // }
  },
  mounted () {
    this.store = JSON.parse(this.$route.query.store)
    let page = this.$refs.goods_container
    page.innerHTML = this.pageData
  },
  methods: {
    onClickLeft () {
      this.$router.back()
      // this.$router.push({
      //   name: 'store',
      //   query: {
      //     data: JSON.stringify(this.store)
      //   }
      // })
    },
    surePay () {
      this.$router.push({
        name: 'submit'
      })
    }
  }
}
</script>

<style scoped>
.goods_page {
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
}

.lunbo_img {
  width: 100%;
}

.goodDetail {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  padding-bottom: 20px;
}

.detail_title {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
  margin-top: 16px;
}

.detail_content {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
  margin-top: 5px;
}

.detail_count {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
  margin-top: 5px;
}

.detail_fee {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
}

.fee {
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(253, 104, 66, 1);
  flex: 1;
}

.pay_btn {
  width: 104px;
  height: 32px;
  background: rgba(213, 179, 136, 1);
  border-radius: 20px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  border-width: 0;
}

.line {
  width: 100%;
  height: 10px;
  background: #ebebeb;
}

.bottom_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 10px 10px;
}

.bottom_line {
  width: 5px;
  height: 17px;
  background: rgba(213, 179, 136, 1);
  border-radius: 3px;
  margin-right: 5px;
}

.bottom_text {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
}
</style>
