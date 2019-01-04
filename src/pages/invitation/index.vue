<template>
  <div class="container">
    <!-- 邀请好友领券 -->
    <div class="tm-invitation-word">
      <image src="/static/images/yq.png" mode="aspectFill"/>
    </div>
    <div class="tm-invitation-box">
      <image src="/static/images/djbj.png" mode="aspectFill"/>
      <div class="tm-invitation-word1">邀请好友赚现金</div>
      <div class="tm-invitation-word2">立得<span>10</span>元可提现佣金</div>
      <div class="tm-invitation-btn">立即邀请</div>
    </div>

    <div class="tm-invitation-rule">
      <div class="tm-invitation-rule-title">推荐规则</div>
      <block v-for="(item,index) in rule" :key="index">
        <div class="tm-rule-item">
          <div class="item-num">{{item.id}}.</div>
          <div class="item-rule">{{item.rule}}</div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      rule:[
        {id:1,rule:'转发给好友或者转发到微信群，被邀请人可获得活动优惠券一张。'},
        {id:2,rule:'邀请一个好友成功注册并且购买会员，分享人可得10元可提现佣金。'},
        {id:3,rule:'邀请更多（含第二个）好友成功注册并且购买会员，分享人每次可获得15元可提现佣金。'}
      ],
    }
  },

  components: {
    
  },

  methods: {
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>


<style>
  page{
    background-image: linear-gradient(0deg, 
      #3fd6c7 0%, 
      #86e5dc 100%);
  }
</style>


<style lang="less" scoped>
  .container{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tm-invitation-word{
      width: 624rpx;
      height: 135rpx;
      margin-top: 57rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .tm-invitation-box{
      width: 702rpx;
      height: 400rpx;
      background-color: #e3faf8;
      box-shadow: 0rpx 4rpx 20rpx 0rpx 
        rgba(64, 214, 199, 0.9);
      border-radius: 12rpx;
      margin-top: 30rpx;
      position: relative;
      image{
        width: 100%;
        height: 100%;
        border-radius: 12rpx;
      }
      .tm-invitation-word1{
        font-size: 46rpx;
        color: #333333;
        position: absolute;
        left: 50%;
        top: 98rpx;
        transform: translateX(-50%);
      }
      .tm-invitation-word2{
        width: 65%;
        font-size: 46rpx;
        color: #333333;
        position: absolute;
        left: 50%;
        top: 190rpx;
        transform: translateX(-50%);
        span{
          font-size: 72rpx;
          color: #f65656;
        }
      }
      .tm-invitation-btn{
        position: absolute;
        left: 50%;
        bottom: -55rpx;
        transform: translateX(-50%);
        width: 560rpx;
        height: 88rpx;
        background-image: linear-gradient(0deg, 
          #3fd6c7 0%, 
          #86e5dc 100%);
        box-shadow: 1rpx 3rpx 20rpx 0rpx 
          rgba(20, 162, 148, 0.8);
        border-radius: 44rpx;
        font-size: 36rpx;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        line-height: 88rpx;
      }
    }
    .tm-invitation-rule{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 160rpx;
      padding: 0 48rpx;
      box-sizing: border-box;
      .tm-invitation-rule-title{
        font-size: 32rpx;
        font-weight: 700;
        color: #333333;
        position: relative;
      }
      .tm-invitation-rule-title::after{
        content: "";
        position: absolute;
        top: 50%;
        left: -240rpx;
        transform: translateY(-50%);
        width: 220rpx;
        height: 2rpx;
        background-image: linear-gradient(-90deg, 
          rgba(255,255,255,.5) 100%, 
          rgba(255,255,255,.5) 0%);
        border-radius: 1rpx;
      }
      .tm-invitation-rule-title::before{
        content: "";
        position: absolute;
        top: 50%;
        right: -240rpx;
        transform: translateY(-50%);
        width: 220rpx;
        height: 2rpx;
        background-image: linear-gradient(-90deg, 
          rgba(255,255,255,.5) 0%, 
          rgba(255,255,255,.5) 100%);
        border-radius: 1rpx;
      }
      .tm-rule-item{
        font-size: 26rpx;
        line-height: 40rpx;
        color: #333333;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 28rpx;
        .item-num{
          width: 2%;
        }
        .item-rule{
          width: 96%;
        }
      }
    }
  }
</style>
