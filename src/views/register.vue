<template>
  <div class="container">
    <van-nav-bar title="登录" />
    <van-field v-model="phone" type="tel" label="手机号" placeholder="请输入手机号"/>
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      phone: ''
    }
  }
}
</script>

<style>
</style>
