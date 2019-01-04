<template>
  <div class="container">
    <!-- 查看规则 -->
    <div class="tm-rule">
      <div class="tm-rule-header">
        <i class="iconfont icon-yaoqingyoujiang" :style="{'font-size':60+'rpx',background: 'linear-gradient(0deg,#3fd6c7 0%,#86e5dc 100%)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent'}"></i>
        <span>邀请有奖</span>
      </div>
      <block v-for="(item,index) in rule" :key="index">
        <div class="tm-rule-item">
          <div class="item-num">{{item.id}}.</div>
          <div class="item-rule">{{item.rule}}</div>
        </div>
      </block>
    </div>

    <div class="tm-rule">
      <div class="tm-rule-header">
        <i class="iconfont icon-shiyongfuli1" :style="{'font-size':60+'rpx',background: 'linear-gradient(0deg,#f65656 0%,#fd7070 100%)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent'}"></i>
        <span>使用福利</span>
      </div>
      <block v-for="(item,index) in welfare" :key="index">
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
        {id:1,rule:'分享听米活动，分享人和领取人各得五元活动抵扣券券；'},
        {id:2,rule:'同时只能持有一张活动抵扣券券；'},
        {id:3,rule:'邀请好友成功购买，首次即得10元佣金；'},
        {id:4,rule:'邀请好友成功购买，第二次（含）之后即可得15元佣金，上不封顶。'},
      ],
      welfare:[
        {id:1,rule:'活动抵扣券在购买活动票券时可抵现金；'},
        {id:2,rule:'账户余额满100元可提现至微信。'}
      ]
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

<style lang="less" scoped>
  .tm-rule{
    margin-top: 40rpx;
    .tm-rule-header{
      height: 50rpx;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 50rpx;
      span{
        font-size: 28rpx;
        color: #333333;
        margin-left: 20rpx;
      }
    }
    .tm-rule-item{
      font-size: 26rpx;
      line-height: 40rpx;
      color: #777777;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 24rpx;
      padding: 0 22rpx;
      box-sizing: border-box;
      .item-num{
        width: 2%;
      }
      .item-rule{
        width: 96%;
      }
    }
  }
</style>
