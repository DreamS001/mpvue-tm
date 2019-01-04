<template>
  <div class="container">
    <!-- 确认订单支付 -->
    <div class="order-pay">
      <image src="/static/images/orderpay.png" mode="aspectFill" />
    </div>
    <div class="order-active-info">
      <div class="order-info-top">
        <div class="order-top-left">
          <div class="active-title">
            <span>《谈判专家》</span>-<span>北京站</span>
          </div>
          <div class="star-time">2018.12.18至2018.12.30</div>
        </div>
        <div class="order-top-right">
          <span>￥</span>
          <span>998</span>
        </div>
      </div>
      <div class="order-info-bottom" @click="goMap">
        <div class="order-bottom-left">
          <i class="iconfont icon-dingwei" :style="{'font-size':60+'rpx',color:'#c6c6c6'}"></i>
          <span>北京市世纪剧院</span>
        </div>
        <div>
          <i class="iconfont icon-xiangyou" :style="{'font-size':50+'rpx',color:'#c6c6c6'}"></i>
        </div>
      </div>
    </div>

    <div class="order-active-form">
      <div class="order-active-item">
        <div class="item-left">会员折扣</div>
        <div class="item-right">月卡会员95折：<span :style="{'font-size':22+'rpx',color:'#f65a5a'}">￥</span><span :style="{'font-size':28+'rpx',color:'#f65a5a'}">948.1</span></div>
      </div>
      <div class="order-active-item">
        <div class="item-left">优惠券</div>
        <div class="item-right" @click="goChooseCoupons">
          <span>请选择</span>
          <i class="iconfont icon-xiangyou" :style="{'font-size':50+'rpx',color:'#c6c6c6'}"></i>
        </div>
      </div>
      <div class="order-active-item" :style="{'border-bottom':'2rpx solid transparent'}">
        <div class="item-left">会员折扣</div>
        <div class="item-right">80元</div>
      </div>
      <div class="order-active-item">
        <div class="item-left">本次抵扣</div>
        <div class="item-right">50元</div>
      </div>

      <div class="order-tatol">
        <span>订单总额：</span>
        <span>￥</span>
        <span>893.1</span>
      </div>
    </div>

    <button  class="pay-btn" plain='true' @click="payClick">立即支付</button>
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
    goChooseCoupons(){
      wx.navigateTo({url:'/pages/chooseCoupons/main'})
    },
    goMap(){
      wx.getLocation({
        type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
        success(res) {
          console.log(res)
          // const latitude = res.latitude
          // const longitude = res.longitude
          const latitude = 34.752394
          const longitude = 113.666136
          wx.openLocation({
            latitude,
            longitude,
            scale: 18
          })
        }
      })
    },
    payClick(){

    }
  },
  onLoad(){
    console.log(this.$root.$mp.query)
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .order-pay{
      width: 100%;
      height: 400rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .order-active-info{
      width: 100%;
      height: 235rpx;
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      margin-top: -20rpx;
      position: relative;
      margin-bottom: 20rpx;
      padding: 0 24rpx;
      box-sizing: border-box;
      .order-info-top{
        width: 100%;
        height: 145rpx;
        padding: 25rpx 0;
        box-sizing: border-box;
        border-bottom: 2rpx solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order-top-left{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .active-title{
            font-size: 32rpx;
            color: #333333;
          }
          .star-time{
            font-size: 28rpx;
            color: #666666;
            padding-left: 10rpx;
            box-sizing: border-box;
          }
        }
        .order-top-right{
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-right: 60rpx;
          box-sizing: border-box;
          span{
            font-size: 66rpx;
            color: #f65a5a;
          }
          span:nth-child(1){
            font-size: 32rpx;
            color: #f65a5a;
            padding-bottom: 13rpx;
            box-sizing: border-box;
          }
        }
      }
      .order-info-bottom{
        width: 100%;
        height: 87rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order-bottom-left{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 28rpx;
          color: #333333;
          span{
            margin-left: 10rpx;
          }
        }
      }
    }
    .order-active-info:after{
      content:'';
      position: absolute;
      bottom: -20rpx;
      left: 0;
      width: 100%;
      height: 20rpx;
      background: #f8f8f8;
    }
    .order-active-form{
      width: 100%;
      padding: 0 24rpx;
      box-sizing: border-box;
      .order-active-item{
        width: 100%;
        height: 87rpx;
        border-bottom: 2rpx solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-left{
          font-size: 28rpx;
          color: #333333;
        }
        .item-right{
          font-size: 28rpx;
          color: #333333;
          display: flex;
          align-items: center;
        }
      }
      .order-tatol{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 60rpx;
        span{
          font-size: 28rpx;
          color: #666666;
        }
        span:nth-child(2){
          font-size: 24rpx;
          color: #f65a5a;
        }
        span:nth-child(3){
          font-size: 42rpx;
          color: #f65a5a;
          margin-bottom: -5rpx;
        }
      }
    }
    .pay-btn{
      width: 620rpx;
      height: 88rpx;
      background-color: #f65a5a;
      box-shadow: 2rpx 7rpx 14rpx 0rpx 
        rgba(246, 90, 90, 0.3);
      border-radius: 44rpx;
      margin: 100rpx 0 80rpx;
      font-size: 36rpx;
      line-height: 88rpx;
      color: #ffffff;
      text-align: center;
      border: 1rpx solid #f65a5a;
    }
  }
</style>
