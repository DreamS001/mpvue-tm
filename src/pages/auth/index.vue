<template>
  <div class="container">
    <!-- 用户授权 -->
    <div class="auth-bj">
      <image src="/static/images/auth-bj.png" mode="aspectFill" />
      <div class="auth-box">
        <div class="logo-box">
          <image src="/static/images/auth-logo.png" mode="aspectFill" />
        </div>
        <span>听米文化</span>
      </div>
    </div>
    <button  class="auth-btn" plain='true' open-type='getUserInfo' @getuserinfo='onGotUserInfo'>授权并登录</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {}
    }
  },

  components: {

  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    onGotUserInfo(e) {
      // 数据是e.mp
      console.log(e)
      if(e.mp.detail.errMsg=='getUserInfo:ok'){
        this.GLOBAL.userInfo=e.mp.detail.rawData
        wx.navigateBack({
          delta: 1
        })
      }else{
        console.log('用户未授权')
        wx.showModal({
          title: '温馨提示',
          content: '为了给您更好的体验，请进行授权',
          showCancel:false,
          confirmColor:'#3fd6c7',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
  },
  onLoad(){
    // console.log(this.GLOBAL.userInfo)
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>
  page{
    height: 100%;
    background-color: #ffffff;
  }
</style>


<style lang="less" scoped>
  .container{
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .auth-bj{
      width: 100%;
      height: 750rpx;
      position: relative;
      image{
        width: 100%;
        height: 100%;
      }
      .auth-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo-box{
          width: 200rpx;
          height: 200rpx;
          background-color: #ffffff;
          border-radius: 100rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          image{
            width: 128rpx;
            height: 62rpx;
          }
        }
        span{
          font-size: 42rpx;
          color: #333333;
          margin-top: 33rpx;
        }
      }
    }
    .auth-btn{
      width: 620rpx;
      height: 88rpx;
      background-image: linear-gradient(0deg, 
        #3fd6c7 0%, 
        #86e5dc 100%);
      box-shadow: 2rpx 6rpx 10rpx 0rpx 
        rgba(64, 214, 200, 0.3);
      border-radius: 44rpx;
      font-size: 36rpx;
      line-height: 88rpx;
      color: #ffffff;
      text-align: center;
      border: none;
      margin-top: 100rpx;
    }
  }
</style>
