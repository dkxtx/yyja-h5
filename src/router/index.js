import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import my from '@/views/my'

import store from '@/views/store'
import order from '@/views/order'

// import HelloWorld from '@/components/HelloWorld'
// import bLogin from '@/views/blogin'
// import aLogin from '@/views/alogin'

// import Index from '@/views/index'
// import Personal from '@/views/personal/personal'
// import Verified from '@/views/personal/verified'
// import bindEmail from '@/views/personal/bindEmail'
// import Contract from '@/views/contract'
// import Sign from '@/views/sign'
// import Success from '@/views/success'
// import BankVerify from '@/views/personal/bankVerify'
// import fromCode from '@/views/qrcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {

      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
    // {
    //   path: '/blogin',
    //   name: 'blogin',
    //   component: bLogin
    // },
    // {
    //   path: '/alogin',
    //   name: 'alogin',
    //   component: aLogin
    // },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // },
    // {
    //   path: '/personal',
    //   name: 'personal',
    //   component: Personal
    // },
    // {
    //   path: '/contract',
    //   name: 'contract',
    //   component: Contract
    // },
    // {
    //   path: '/verified',
    //   name: 'verified',
    //   component: Verified
    // },
    // {
    //   path: '/bindEmail',
    //   name: 'bindEmail',
    //   component: bindEmail
    // },
    // {
    //   path: '/sign',
    //   name: 'sign',
    //   component: Sign
    // },
    // {
    //   path: '/success',
    //   name: 'success',
    //   component: Success
    // },
    // {
    //   path: '/bankVerify',
    //   name: 'bankVerify',
    //   component: BankVerify
    // },
    // {
    //   path: '/fromCode',
    //   name: 'fromCode',
    //   component: fromCode
    // }
  ]
})
