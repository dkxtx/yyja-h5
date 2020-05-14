import axios from 'axios'
import { Toast } from 'vant'
// import router from '@/router'

const token = localStorage.getItem('token')

const serve = axios.create({
  baseURL: 'https://sc.bzamo.com',

  // 超时时间
  timeout: 60000,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'token': token || ''
  }
})

serve.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['token'] = localStorage.getItem('token')
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

serve.interceptors.response.use(
  response => {
    const res = response
    // console.log(res)
    if (res.data.code !== 200) {
      return res
      // if (res.data.code === 401) {
      //   Dialog.confirm({
      //     title: '提示',
      //     message: '登录已过期，请重新登录',
      //     showCancelButton: false,
      //     confirmButtonColor: '#42d8b0'
      //   }).then(() => {
      //     // on confirm
      //     setTimeout(() => {
      //       localStorage.removeItem('token')
      //       if (localStorage.getItem('login')) {
      //         router.push({ path: localStorage.getItem('login') }) // 强制切换当前路由 path
      //       } else {
      //         router.push({ path: '/alogin' })
      //       }
      //     }, 500)
      //   }).catch(() => {
      //     // on cancel
      //   })
      // }
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // if (show_err === true) {
    // show_err = false
    Toast({
      message: error.message,
      duration: '500'
    })
    // }

    return Promise.reject(error)
  }
)
export default serve
