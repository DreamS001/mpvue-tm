<template>
  <div class="container">
    <!-- 我的推广 -->
    <div class="tm-promotion-header">
      <div class="tm-header-money">
        <span>1000</span>
        <span>余额（元）</span>
      </div>
      <div class="tm-header-cash">
        <span @click="getCash">提现</span>
      </div>
    </div>
    <div class="tm-coupon-list">
      <block v-for="(item,index) in couponData" :key="index">
        <div class="tm-coupon-item">
          <div class="tm-coupon-left">
            <div class="tm-left-price">
              <span>￥</span>
              <span>{{item.money}}</span>
            </div>
            <span>代金券</span>
          </div>
          <div class="tm-coupon-right">
            <div class="tm-right-top">可用于购买活动时抵现</div>
            <div class="tm-right-bottom">
              <span>{{item.date}}到期</span>
              <div class="tm-right-btn">立即使用</div>
            </div>
          </div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>
import {couponData} from './data'

export default {
  data () {
    return {
      couponData:[]
    }
  },

  components: {
    
  },

  methods: {
    getCash(){
      wx.navigateTo({url:'/pages/myCash/main'})
    }
  },

  onLoad(){
    this.couponData=couponData.couponData
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-promotion-header{
      width: 100%;
      height: 290rpx;
      background-image: linear-gradient(0deg, 
        #f65656 0%, 
        #ff7b7b 100%);
      padding: 60rpx 42rpx 0 42rpx;
      box-sizing: border-box;
      .tm-header-money{
        height: 130rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 20rpx;
          color: #ffffff;
        }
        span:first-child{
          font-size: 78rpx;
        }
      }
      .tm-header-cash{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 30rpx;
        span{
          display: block;
          width: 100rpx;
          height: 42rpx;
          border-radius: 21rpx;
          border: solid 2rpx #ffffff;
          font-size: 24rpx;
          color: #fefefe;
          text-align: center;
          line-height: 42rpx;
        }
      }
    }
    .tm-coupon-list{
      width: 100%;
      padding: 0 24rpx 50rpx;
      box-sizing: border-box;
      .tm-coupon-item{
        width: 100%;
        height: 180rpx;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 14rpx 0rpx 
          rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 30rpx;
        display: flex;
        .tm-coupon-left{
          width: 180rpx;
          height: 100%;
          background-image: linear-gradient(-30deg, 
            #f65656 0%, 
            #ff7b7b 100%);
          border-radius: 10rpx 0rpx 0rpx 10rpx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 22rpx;
          color: #ffffff;
          .tm-left-price{
            display: flex;
            color: #ffffff;
            align-items: flex-end;
            span{
              font-size: 58rpx;
            }
            span:nth-child(1){
              font-size: 28rpx;
              display: inline-block;
              padding-bottom: 7rpx;
            }
          }
        }
        .tm-coupon-right{
          width: 75%;
          height: 100%;
          padding: 40rpx 20rpx 40rpx 30rpx;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .tm-right-top{
            font-size: 28rpx;
            color: #333333;
          }
          .tm-right-bottom{
            font-size: 24rpx;
            color: #999999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tm-right-btn{
              width: 160rpx;
              height: 50rpx;
              background-color: #f65656;
              box-shadow: 1rpx 4rpx 10rpx 0rpx 
                rgba(246, 90, 90, 0.3);
              border-radius: 25rpx;
              font-size: 24rpx;
              color: #ffffff;
              text-align: center;
              line-height: 50rpx;
            }
          }
        }
      }
    }
  }
</style>
