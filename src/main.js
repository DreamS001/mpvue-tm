import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
App.mpType = 'app'

var Fly=require("flyio/dist/npm/wx")
var fly=new Fly

// 请求拦截
fly.interceptors.request.use((request) => {
    wx.showNavigationBarLoading()
    return request
})
  
// 响应拦截

fly.interceptors.response.use(
    (response, promise) => {
      wx.hideNavigationBarLoading()
      return promise.resolve(response.data)
    },
    (err, promise) => {
      wx.hideNavigationBarLoading()
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
      return promise.resolve()
    }
)




//配置请求基地址
fly.config.baseURL='http://192.168.0.106:8082/wx/'
Vue.prototype.$http = fly // 将fly实例挂在vue原型上


// var globalData=new globalData
// globalData:{
//   userInfo: null
// }

import global from './components/userInfo';
// Vue.prototype.globalData = getApp().globalData  
  


const app = new Vue(App)

Vue.prototype.GLOBAL = global;

app.$mount()
