<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  },
  mounted(){
    // 一进来看看用户是否授权过
    this.getSetting()
  },
  methods: {
    getSetting(){
      var _this=this
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过')
                _this.GLOBAL.userInfo=res.userInfo
              }
            })
          }else{
            console.log('用户还未授权过')
            wx.navigateTo({url:'/pages/auth/main'})
            // wx.showModal({
            //   title: '温馨提示',
            //   content: '为了给您更好的体验，请进行授权',
            //   success(res) {
            //     if (res.confirm) {
            //       console.log('用户点击确定')
            //       wx.navigateTo({url:'/pages/auth/main'})
            //     } else if (res.cancel) {
            //       console.log('用户点击取消')
            //     }
            //   }
            // })
          }
        }
      })

    }
  }
}
</script>

<style>
@import 'assets/css/iconfont.css';/* // 若css在static中，要加..，不然会报错 */
page{
  background: #ffffff;
}
.container {
  height: 100%;
  margin:0;
  padding: 0 24rpx;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
