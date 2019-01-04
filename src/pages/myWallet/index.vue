<template>
  <div class="container">
    <!-- 我的钱包 -->
    <div class="tm-wallet-hearder">
      <div class="tm-header-rule">
        <span @click="goRule">
          查看规则
          <i class="iconfont icon-xiangyou" :style="{color:'#ffffff', 'font-size': 40 + 'rpx'}"></i>
        </span>
      </div>
      <div class="tm-header-money">
        <span>12138</span>
        <span>钱包余额（元）</span>
      </div>
      <div class="tm-header-renew">立即续费</div>
      <div class="tm-header-cash">
        <span @click="getCash">提现</span>
      </div>
    </div>

    <div class="tm-wallet-list">
      <block v-for="(item,index) in listArr" :key="index">
        <div class="tm-wallet-item" :data-id="item.id" @click="goLevel">
          <span>{{item.name}}</span>
          <i class="iconfont icon-xiangyou" :style="{color:'#cccccc', 'font-size': 40 + 'rpx'}"></i>
        </div>
      </block>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      listArr:[
        {id:1,name:'我的分享'},
        {id:2,name:'我的会员券'},
        {id:3,name:'我的活动券'}
      ]
    }
  },

  components: {
    
  },

  methods: {
    getCash(){
      wx.navigateTo({url:'/pages/myCash/main'})
    },
    goLevel(e){
      console.log(e.currentTarget.dataset.id)
      const id=e.currentTarget.dataset.id;
      switch (id)
      {
      case 1:
        wx.navigateTo({url:'/pages/shareInvitation/main'})
        break;
      case 2:
        wx.navigateTo({url:'/pages/myMemberCoupons/main?id='+1})
        break;
      case 3:
        wx.navigateTo({url:'/pages/myMemberCoupons/main?id='+2})
        break;
      }
    },
    goRule(){
      wx.navigateTo({url:'/pages/tmRule/main'})
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-wallet-hearder{
      width: 100%;
      height: 340rpx;
      background-image: linear-gradient(0deg, 
        #3fd6c7 0%, 
        #86e5dc 100%);
        padding: 0 24rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tm-header-rule{
          width: 100%;
          height: 60rpx;
          display: flex;
          justify-content: flex-end;
          span{
            display: flex;
            align-items: center;
            font-size: 24rpx;
            color: #ffffff;
          }
        }
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
        .tm-header-renew{
          width: 160rpx;
          height: 50rpx;
          background-color: #ffffff;
          box-shadow: 0rpx 3rpx 7rpx 0rpx 
            rgba(0, 111, 100, 0.14);
          border-radius: 25rpx;
          margin-top: 30rpx;
          font-size: 28rpx;
          color: #333333;
          text-align: center;
          line-height: 50rpx;
        }
        .tm-header-cash{
          width: 100%;
          display: flex;
          justify-content: flex-end;
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
    .tm-wallet-list{
      width: 100%;
      padding: 0 30rpx;
      box-sizing: border-box;
      .tm-wallet-item{
        width: 100%;
        height: 98rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15rpx 0 12rpx;
        box-sizing: border-box;
        border-bottom: 2rpx solid #eeeeee;
        span{
          font-size: 28rpx;
          color: #333333;
        }
      }
    }
  }
</style>
