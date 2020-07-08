import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home/home'

import goods from '@/views/store/goods'
import order from '@/views/store/order'
import store from '@/views/store/store'
import submit from '@/views/store/submit'
import business from '@/views/store/business'

import register from '@/views/register'

import my from '@/views/person/my'
import feedback from '@/views/person/feedback'

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
  routes: [{
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
    path: '/business',
    name: 'business',
    component: business
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
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/submit',
    name: 'submit',
    component: submit
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: feedback
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
