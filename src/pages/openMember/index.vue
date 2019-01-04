<template>
  <div class="container">
    <!-- 开通月会员 -->
    <div class="tm-member-header">
      <image src="/static/images/member99.png" mode="aspectFill"/>
      <div class="tm-member-header-word">
        <span>激活会员享95折优惠主场活动任你选</span>
      </div>
      <div class="tm-member-btn">立即开通</div>
    </div>

    <div class="tm-member-equity">
      <div class="tm-member-equity-title">月会员权益</div>
      <div class="tm-member-equity-content">
        <block v-for="(item,index) in equity" :key="index">
          <div class="tm-member-equity-content-item">
            <span class="circular"></span>
            <span class="number">{{item.id}}.</span>
            <span class="tm-word">{{item.equity}}</span>
          </div>
        </block>
      </div>
    </div>

    <div class="tm-cash-box">
      <div class="tm-cash-top">
        <div class="tm-cash-top-1">
          <span>优惠券</span>
          <div class="tm-cash-top-1-right" @click="goCoupons">
            <span>20元优惠券</span>
            <i class="iconfont icon-xiangyou" :style="{'font-size':35+'rpx',color:'rgba(102,102,102,.73)'}"></i>
          </div>
        </div>
        <div class="tm-cash-top-2">
          <div class="tm-cash-top-2-left">
            <span>账户余额抵现</span>
            <span>可用余额：80元</span>
          </div>
          <div class="tm-cash-top-2-right">
            <input class="tm-cash-top-2-right-input" type="text" />
            <span>元</span>
          </div>
        </div>
      </div>
      <div class="tm-cash-bottom">
        <div class="discount">
          <span>已优惠</span>
          <span>¥70</span>
        </div>
        <div class="total">
          <span>合计：</span>
          <span>¥29</span>
        </div>
      </div>
    </div>

    <div class="tm-footer">
      <div class="tm-footer-left">
        <div class="discount">
          <span>已优惠</span>
          <span>¥70</span>
        </div>
        <div class="total">
          <span>合计：</span>
          <span>¥29</span>
        </div>
      </div>
      <div class="tm-footer-right">
        <span>立即开通</span>
        <span>月卡至2018-11-1</span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      equity:[
        {id:1,equity:'有效期内月卡会员享9.5折优惠购票；'},
        {id:2,equity:'优先体验优惠活动；'},
        {id:3,equity:'月卡可随时升级为季卡。'},
      ]
    }
  },

  components: {
    
  },

  methods: {
    goCoupons(){
      wx.navigateTo({url:'/pages/chooseCoupons/main'})
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .tm-member-header{
    width: 702rpx;
    height: 340rpx;
    box-shadow: 0px 0px 40px 0px 
		rgba(0, 117, 105, 0.15);
    border-radius: 20px;
    position: relative;
    image{
      width: 100%;
      height: 100%;
      border-radius: 20rpx;
    }
    .tm-member-header-word{
      width: 100%;
      height: 88rpx;
      position: absolute;
      top: 165rpx;
      left: 50%;
      transform: translateX(-50%);
      font-size: 28rpx;
      color: #666666;
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        font-size: 28rpx;
        color: #666666;
        margin-bottom: 20rpx;
      }
    }
    .tm-member-btn{
      position: absolute;
      bottom: 30rpx;
      left: 50%;
      transform: translateX(-50%);
      width: 160rpx;
      height: 50rpx;
      background-image: linear-gradient(0deg, 
      #3fd6c7 0%, 
      #86e5dc 100%);
      box-shadow: 0rpx 5rpx 9rpx 0px 
      rgba(0, 201, 181, 0.26);
      border-radius: 25rpx;
      font-size: 28rpx;
      color: #ffffff;
      text-align: center;
      line-height: 50rpx;
    }
  }
  .tm-member-equity{
    .tm-member-equity-title{
      font-size: 32rpx;
      color: #333333;
      padding:50rpx 0;
      box-sizing: border-box;
    }
    .tm-member-equity-content{
      width: 100%;
      padding: 0 14rpx;
      box-sizing: border-box;
      padding-bottom: 38rpx;
      box-sizing: border-box;
      border-bottom: 2rpx solid #ebebeb;
      .tm-member-equity-content-item{
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: #666666;
        margin-bottom: 25rpx;
        .circular{
          width: 6rpx;
          height: 6rpx;
          background-color: #81d8ce;
          border-radius: 3rpx;
        }
        .number{
          margin: 0 10rpx 0 20rpx;
        }
      }
    }
  }
  .tm-cash-box{
    width: 100%;
    .tm-cash-top{
      width: 100%;
      height: 226rpx;
      padding: 50rpx 20rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 2rpx solid #ebebeb;
      .tm-cash-top-1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 28rpx;
          color: #000000;
        }
        .tm-cash-top-1-right{
          display: flex;
          align-items: center;
          span{
            font-size: 24rpx;
            color: #f65656;
          }
        }
      }
      .tm-cash-top-2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tm-cash-top-2-left{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          span{
            font-size: 28rpx;
            color: #000000;
          }
          span:nth-child(2){
            font-size: 18rpx;
            color: #aaaaaa;
          }
        }
        .tm-cash-top-2-right{
          display: flex;
          align-items: center;
          .tm-cash-top-2-right-input{
            width: 100rpx;
            height: 40rpx;
            border-radius: 2rpx;
            border: solid 1rpx #cccccc;
            text-align: center;
            margin-right: 20rpx;
            font-size: 24rpx;
            color: #f65656;
          }
          span{
            font-size: 24rpx;
            color: #aaaaaa;
          }
        }
      }
    }
    .tm-cash-bottom{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 30rpx;
      .discount{
        display: flex;
        align-items: center;
        margin-right: 40rpx;
        span{
          font-size: 24rpx;
          color: #f65656;
        }
        span:nth-child(1){
          color: #777777;
        }
      }
      .total{
        display: flex;
        align-items: center;
        span{
          font-size: 36rpx;
          font-weight: 600;
          color: #f65656;
        }
        span:nth-child(1){
          font-size: 24rpx;
          font-weight: 400;
          color: #777777;
        }
      }
    }
  }

  .tm-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 5rpx 20rpx 1rpx 
      rgba(0, 0, 0, 0.15);
    display: flex;
    .tm-footer-left{
      width: 430rpx;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50rpx;
      box-sizing: border-box;
      .discount{
        display: flex;
        align-items: center;
        margin-right: 40rpx;
        span{
          font-size: 24rpx;
          color: #f65656;
        }
        span:nth-child(1){
          color: #777777;
        }
      }
      .total{
        display: flex;
        align-items: center;
        span{
          font-size: 36rpx;
          font-weight: 600;
          color: #f65656;
        }
        span:nth-child(1){
          font-size: 24rpx;
          font-weight: 400;
          color: #777777;
        }
      }
    }
    .tm-footer-right{
      width: 320rpx;
      height: 98rpx;
      background-image: linear-gradient(0deg, 
        #3fd6c7 0%, 
        #86e5dc 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span{
        font-size: 32rpx;
        color: #ffffff;
      }
      span:nth-child(2){
        font-size: 20rpx;
        color: #ffffff;
        margin-top: 10rpx;
      }
    }
  }
</style>
