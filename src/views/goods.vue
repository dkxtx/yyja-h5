<template>
  <div class="page">
    <div ref="goods_container" class="goods_page"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      goodData: {},
      pageData: ''
    }
  },
  computed: {
  },
  created () {
    this.goodData = this.$route.query.data
    this.pageData = this.goodData.detail
    console.log('goodData', this.goodData)
  },
  mounted () {
    let page = this.$refs.goods_container
    page.innerHTML = this.pageData
    console.log(this.$refs.goods_container)
  },
  methods: {
  }
}
</script>

<style scoped>
.goods_page {
  width: 100%;
  height: 100%;
}
</style>
