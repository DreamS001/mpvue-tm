<template>
  <div class="container">
    <!-- 付款成功 -->
    <div class="pay-success-top">付款成功</div>
    <div class="pay-success-content"></div>
    <div class="pay-success-complete">立即查看</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
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
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style>
  page{   
    background-image: linear-gradient(-30deg, 
		#f65656 0%, 
		#ff7b7b 100%);
  }
</style>


<style lang="less" scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    .pay-success-top{
      font-size: 52rpx;
      color: #ffffff;
      text-shadow: 1rpx 3rpx 6rpx 0rpx 
        #cf0000;
      margin-top: 144rpx;
    }
    .pay-success-content{
      width: 438rpx;
      height: 436rpx;
      margin: 110rpx 0 255rpx 0;
    }
    .pay-success-complete{
      width: 620rpx;
      height: 88rpx;
      background-color: #ffffff;
      box-shadow: 1rpx 3rpx 12rpx 0rpx 
        rgba(214, 56, 56, 0.5);
      border-radius: 44rpx;
      font-size: 36rpx;
      color: #333333;
      line-height: 88rpx;
      text-align: center;
    }
  }
</style>
