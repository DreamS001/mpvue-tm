<template>
  <div class="container">
    <!-- 礼包 -->
    <div class="tm-gifts">
      <block v-for="(item,index) in couponData" :key="index">
        <div class="tm-gifts-item">
          <div class="tm-item-left">
            <span class="price">￥</span>
            <span class="price">{{item.money}}</span>
          </div>
          <div class="tm-item-right">
            <span>购买99月卡会员可用</span>
            <span>有效期自注册日起30天内</span>
          </div>
        </div>
      </block>

      <div class="tm-gifts-btn" @click="nowReceive">立即领取</div>
    </div>

    <div class="tm-gifts-rule">
      <div class="tm-rule-title">新人大礼包，购买会员可抵现：</div>
      <block v-for="(item,index) in rule" :key="index">
        <div class="tm-rule-item">
          <div class="item-num">{{item.id}}.</div>
          <div class="item-rule">{{item.rule}}</div>
        </div>
      </block>
    </div>

    <div class="tm-tips-box" v-if="isShowTips">
      <div class="tm-tips-content">
        <image src="/static/images/success-taost.png" mode="aspectFill" />

        <div class="tm-tips-title">领取成功</div>

        <div class="tm-tips-list">
          <block v-for="(item,index) in successData" :key="index">
            <div class="tm-tips-item">
              <div class="tm-item-left">
                <span class="price">￥</span>
                <span class="price">{{item.money}}</span>
              </div>
              <div class="tm-item-meidel">
                <span>{{item.title}}</span>
                <span>有效期自注册日起10天内</span>
              </div>
              <div class="tm-item-right">
                <div class="tm-item-right-btn">立即使用</div>
              </div>
            </div>
          </block>

          <span class="seeRedPackage">查看我的红包</span>

          <i class="iconfont icon-guanbi tm-taost-close" @click="closeTips" :style="{color: 'rgba(255,255,255,.6)', 'font-size': 75 + 'rpx'}"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      couponData:[
        {id:1,money:5},
        {id:2,money:15},
        {id:3,money:30}
      ],
      rule:[
        {id:1,rule:'成功注册即可获得价值50元（5＋15＋30）的会员券一份。'},
        {id:2,rule:'会员券仅限购买会员可用，不可与活动优惠券同时使用。'},
        {id:3,rule:'请在有效期内使用，过期作废。'},
        {id:4,rule:'会员券仅限本人使用，不得转让给他人。'},
      ],
      successData:[
        {id:1,money:30,title:'购买199季卡会员可用'},
        {id:2,money:30,title:'购买199季卡会员可用'},
        {id:3,money:30,title:'购买199季卡会员可用'}
      ],
      isShowTips:false
    }
  },

  components: {
    
  },

  methods: {
    nowReceive(){
      this.isShowTips=!this.isShowTips;
    },
    closeTips(){
      this.isShowTips=!this.isShowTips;
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>
<style>
  page{
    height: 100%;
    background-image: linear-gradient(-30deg, 
      #f65656 0%, 
      #ff7b7b 100%);
  }
</style>


<style lang="less" scoped>
  .container{
    width: 100%;
    height: 100%;
    // min-height: 1536rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
    .tm-gifts{
      width: 100%;
      padding: 20rpx 40rpx 80rpx;
      box-sizing: border-box;
      .tm-gifts-item{
        width: 100%;
        height: 180rpx;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 14rpx 0rpx 
          rgba(246, 86, 86, 0.6);
        margin-top: 30rpx;
        border-radius: 10rpx;
        display: flex;
        justify-content: space-between;
        .tm-item-left{
          width: 200rpx;
          height: 100%;
          border-right: 1px dashed #b5b5b5;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .price{
            font-size: 58rpx;
            font-weight: 700;
            color: #f65656;
            text-shadow: 1rpx 4rpx 8rpx 0rpx 
            rgba(246, 86, 86, 0.5);
            display: inline-block;
          }
          .price:nth-child(1){
            font-size: 28rpx;
            margin-bottom: -24rpx;
          }
        }
        .tm-item-left:after{
          content: '';
          width: 20rpx;
          height: 10rpx;
          background: #f65656;
          position: absolute;
          top: 0rpx;
          right: -10rpx;
          border-radius: 0 0 10rpx 10rpx;
        }
        .tm-item-left:before{
          content: '';
          width: 20rpx;
          height: 10rpx;
          background: #f65656;
          position: absolute;
          bottom: 0rpx;
          right: -10rpx;
          border-radius: 10rpx 10rpx 0 0;
        }

        .tm-item-right{
          width: 68.5%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 22rpx;
          padding-left: 30rpx;
          box-sizing: border-box;
          span{
            font-size: 24rpx;
            color: #666666;
            margin-top: 22rpx;
          }
          span:nth-child(1){
            font-size: 28rpx;
            color: #333333;
          }
        }
      }
      .tm-gifts-btn{
        width: 620rpx;
        height: 88rpx;
        background-color: #ffffff;
        box-shadow: 1rpx 3rpx 12rpx 0rpx 
          rgba(214, 56, 56, 0.5);
        border-radius: 44rpx;
        margin-top: 70rpx;
        font-size: 36rpx;
        font-weight: 700;
        color: #333333;
        text-align: center;
        line-height: 88rpx;
      }
    }
    .tm-gifts-rule{
      width: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 12rpx;
      margin-bottom: 86rpx;
      padding: 30rpx 30rpx 40rpx 30rpx;
      box-sizing: border-box;
      .tm-rule-title{
        font-size: 30rpx;
        color: #333333;
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
    .tm-tips-box{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding-left: 40rpx;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      .tm-tips-content{
        width: 620rpx;
        height: 816rpx;
        position: relative;
        image{
          width: 100%;
          height: 100%;
        }
        .tm-tips-title{
          position: absolute;
          top: 100rpx;
          left: 45%;
          transform: translateX(-50%);
          font-size: 52rpx;
          color: #ffffff;
        }
        .tm-tips-list{
          position: absolute;
          top: 230rpx;
          left: 0rpx;
          width: 580rpx;
          padding: 10rpx 20rpx;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          .tm-tips-item{
            width: 100%;
            height: 145rpx;
            background-color: #ffffff;
	          border-radius: 6rpx;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 10rpx 0 18rpx;
            box-sizing: border-box;
            margin-bottom: 20rpx;
            .tm-item-left{
              width: 20%;
              height: 100%;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              .price{
                font-size: 58rpx;
                color: #f65656;
                text-shadow: 1rpx 4rpx 8rpx 0rpx 
                rgba(246, 86, 86, 0.5);
                display: inline-block;
              }
              .price:nth-child(1){
                font-size: 28rpx;
                margin-bottom: -24rpx;
              }
            }
            .tm-item-meidel{
              width: 50%;
              height: 100%;
              display: flex;
              padding: 45rpx 0 36rpx 10rpx;
              box-sizing: border-box;
              flex-direction: column;
              justify-content: space-between;
              span{
                font-size: 24rpx;
                // font-weight: 700;
                color: #333333;
              }
              span:nth-child(2){
                font-size: 20rpx;
                font-weight: 400;
                color: #666666;
              }
            }
            .tm-item-right{
              width: 30%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              .tm-item-right-btn{
                width: 140rpx;
                height: 50rpx;
                background-color: #f65656;
                box-shadow: 1rpx 4rpx 10rpx 0rpx 
                  rgba(246, 90, 90, 0.3);
                border-radius: 25rpx;
                text-align: center;
                line-height: 50rpx;
                font-size: 24rpx;
                color: #ffffff;
              }
            }
          }
          .seeRedPackage{
            display: inline-block;
            font-size: 30rpx;
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
            margin-top: 6rpx;
          }
          .tm-taost-close{
            margin-top: 35rpx;
          }
        }
      }
    }
  }
</style>
