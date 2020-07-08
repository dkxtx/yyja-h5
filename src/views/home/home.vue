<template>
  <div class="page">
    <van-nav-bar title="商城" />
    <div class="header">
      <img class="banner_img" :src="bannerImg" alt />
      <van-grid :gutter="10" :border="false" :column-num="5" style="padding:0;">
        <van-grid-item
          v-for="(item,index) in headerData"
          :key="index"
          :icon="item.url"
          :text="item.title"
        />
      </van-grid>
    </div>
    <div class="line"></div>
    <div class="body_class">
      <div class="body_title">推荐店铺</div>
      <van-skeleton v-if="sotreData.length === 0" title avatar :row="3" />
      <div class="box" v-else v-for="(item, index) in sotreData" :key="index">
        <img class="box_img" :src="item.logo" alt srcset />
        <div class="box_content">
          <div class="title">{{item.name}}({{item.district}})</div>
          <div class="content">{{item.address}}</div>
          <div class="tag">{{item.phone}}</div>
        </div>
        <div class="box_tip"></div>
      </div>
    </div>
    <div class="body_class">
      <div class="body_title">热门商品</div>
      <van-skeleton v-if="goodData.length === 0" title avatar :row="3" />
      <div class="box" v-else v-for="(item, index) in goodData" :key="index" @click="onClickGoods(item)">
        <img class="box_img" :src="item.pic[0]" alt srcset />
        <div class="box_content">
          <div class="title">{{item.name}}</div>
          <div class="content">{{item.intro}}</div>
          <div class="bottom_box">
            <div class="price">￥{{item.price}}</div>
            <div class="box_tip">销售 {{item.sales}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'

export default {
  components: {},
  data () {
    return {
      bannerImg: '',
      headerData: [],
      sotreData: [],
      goodData: []
    }
  },
  computed: {},
  created () {
    this.getBanner()
    this.getCategory()
    this.getStore()
    this.getGood()
  },
  mounted () {},
  methods: {
    getBanner () {
      axios
        .get('http://192.168.51.53:9001/wawy/user/banner')
        .then(res => {
          this.bannerImg = res.data.data[0].url
        })
        .catch(error => {
          Toast({
            message: error.message,
            duration: '500'
          })
        })
    },
    getCategory () {
      axios
        .get('http://192.168.51.53:9001/wawy/user/categories')
        .then(res => {
          this.headerData = res.data.data
        })
        .catch(error => {
          Toast({
            message: error.message,
            duration: '500'
          })
        })
    },
    getStore () {
      axios
        .get('http://192.168.51.53:9001/wawy/user/recommend/stores')
        .then(res => {
          this.sotreData = res.data.data
        })
        .catch(error => {
          Toast({
            message: error.message,
            duration: '500'
          })
        })
    },
    getGood () {
      axios
        .get('http://192.168.51.53:9001/wawy/user/hot/goods')
        .then(res => {
          console.log(res)
          this.goodData = res.data.data
        })
        .catch(error => {
          Toast({
            message: error.message,
            duration: '500'
          })
        })
    },
    onClickGoods (goods) {
      console.log(goods)
      this.$router.push({path: '/goods',
        query: {
          data: goods,
          store: JSON.stringify(goods.detail)
        }})
    }
  }
}
</script>

<style scoped>
.header {
  padding: 10px 0;
}
.banner_img {
  width: 100%;
  height: 180px;
}
.line {
  width: 100%;
  height: 10px;
  background: #ebebeb;
}
.body_class {
  padding: 10px 0;
}
.body_title {
  /* width: 68px; */
  font-size: 17px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  position: relative;
}
.body_title::before {
  content: " ";
  width: 25px;
  height: 1px;
  background: rgba(216, 216, 216, 1);
  position: absolute;
  top: 11px;
  left: 30%;
}
.body_title::after {
  content: " ";
  width: 25px;
  height: 1px;
  background: rgba(216, 216, 216, 1);
  position: absolute;
  top: 11px;
  right: 30%;
}

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(216, 216, 216, 0.5);
  width: 92%;
  margin: auto;
}

.box_img {
  width: 85px;
  height: 85px;
  border-radius: 10px;
}

.box_content {
  height: 85px;
  line-height: 30px;
  margin-left: 10px;
}

.title {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.content {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.bottom_box {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.price {
  flex: 1;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(253, 104, 66, 1);
}

.box_tip {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(195, 195, 195, 1);
}
</style>
