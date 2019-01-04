<template>
  <div class="container">
    <!-- 我的提现 -->
    <div class="tm-cash-header">
      <div class="tm-cash-header-top">
        <span>账户余额</span>
        <span>180.00</span>
      </div>
      <div class="tm-cash-header-bottom">
        <span>提现到微信零钱</span>
      </div>
    </div>

    <div class="tm-cash-content">
      <div class="tm-cash-content-cash">提现余额</div>
      <div class="tm-cash-content-box">
        <span>¥</span>
        <input class="tm-cash-content-input" v-model="balance"/>
      </div>
      <div class="tm-cash-content-cash" @click="cashAll" :style="{'font-size':24+'rpx'}">全部提现</div>
      <div class="tm-cash-btn">提现</div>
      <div class="tm-cash-content-cash" :style="{'font-size':24+'rpx','margin-top':30+'rpx','text-align':'center'}">1~3个工作日内到账</div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      balance:''
    }
  },

  components: {
    
  },

  methods: {
    cashAll(){
      this.balance='180.00'
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style>
  page{
    background: #f8f8f8;
  }
</style>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-cash-header{
      width: 100%;
      height: 230rpx;
      background-color: #f8f8f8;
      padding: 75rpx 25rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .tm-cash-header-top{
        display: flex;
        align-items: center;
        span{
          font-size: 36rpx;
          color: #333333;
        }
        span:nth-child(1){
          font-size: 28rpx;
          color: #333333;
          margin-right: 40rpx;
        }
      }
      .tm-cash-header-bottom{
        span{
          font-size: 20rpx;
          color: #777777;
        }
      }
    }
    .tm-cash-content{
      width: 100%;
      height: 517rpx;
      background: #ffffff;
      padding: 30rpx 25rpx 40rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .tm-cash-content-cash{
        font-size: 28rpx;
        color: #333333;
      }
      .tm-cash-content-box{
        width: 100%;
        height: 160rpx;
        margin: 12rpx 0 27rpx 0;
        box-sizing: border-box;
        border-bottom: 2rpx solid #eeeeee;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span{
          font-size: 78rpx;
          color: #333333;
          margin-right: 28rpx;
        }
        .tm-cash-content-input{
          height: 100%;
          font-size: 78rpx;
          color: #333333;
        }
      }
      .tm-cash-btn{
        width: 100%;
        height: 88rpx;
        background-image: linear-gradient(0deg, 
          #3fd6c7 0%, 
          #86e5dc 100%);
        border-radius: 4rpx;
        text-align: center;
        line-height: 88rpx;
        font-size: 36rpx;
        color: #ffffff;
        margin-top: 50rpx;
      }
    }
  }
</style>
