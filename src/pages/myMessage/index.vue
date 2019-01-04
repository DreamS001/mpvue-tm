<template>
  <div class="container">
    <!-- 我的消息 -->
    <block v-if="messageData.length>0">
      <div class="tm-message-list">
        <block v-for="(item,index) in messageData" :key="index">
          <div class="tm-message-item">
            <div class="tm-message-item-top">
              <block v-if="item.type=='order'">
                <div class="tm-message-item-top-left">
                  <i class="iconfont icon-dingdanxiaoxi" :style="{'font-size':80+'rpx',color:'#ffffff'}"></i>
                </div>
              </block>
              <block v-else>
                <div class="tm-message-item-top-left" :style="{'background-image': 'linear-gradient(0deg, #f65656 0%, #ff7b7b 100%)'}">
                  <i class="iconfont icon-huodongxiaoxi" :style="{'font-size':80+'rpx',color:'#ffffff'}"></i>
                </div>
              </block>
              <div class="tm-message-item-top-right">
                <div class="tm-message-item-top-right-top">
                  <span>{{item.title}}</span>
                  <span>{{item.date}}</span>
                </div>
                <block v-if="item.type=='order'">
                  <div class="tm-message-item-top-right-bottom">
                    <span>订单已消费，分享订单有机会获得优惠券，分享订单成功可获最高奖励金！</span>
                  </div>
                </block>
                <block v-else>
                  <div class="tm-message-item-top-right-bottom">
                    <span>您的10元活动优惠券还未使用，各种演唱会话剧门票优惠多多，点击查看>></span>
                  </div>
                </block>
              </div>
            </div>
            <div class="tm-message-item-bottom">
              <span>查看详情</span>
              <i class="iconfont icon-xiangyou" :style="{'font-size':40+'rpx',color:'#3fd6c7'}"></i>
            </div>
          </div>
        </block>
      </div>
    </block>
    <block v-else>
      <div class="none-message">
        <image src="/static/images/none-message.png" mode="aspectFill" />
        <span>亲，你还没有消息哦～</span>
      </div>
    </block>
  </div>
</template>

<script>


export default {
  data () {
    return {
      messageData:[
        {id:1,title:'订单消息',date:'今天12:15',type:'order'},
        {id:2,title:'活动消息',date:'今天12:15',type:'active'},
        {id:3,title:'订单消息',date:'今天12:15',type:'order'},
        {id:4,title:'活动消息',date:'今天12:15',type:'active'},
        {id:5,title:'订单消息',date:'今天12:15',type:'order'},
      ],
      isShow:false
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
  .container{
    padding: 0;
    .tm-message-list{
      width: 100%;
      padding-bottom: 50rpx;
      .tm-message-item{
        width: 100%;
        height: 244rpx;
        position: relative;
        .tm-message-item-top{
          width: 100%;
          height: 173rpx;
          border-bottom: 1px solid #ebebeb;
          padding: 30rpx 24rpx;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tm-message-item-top-left{
            width: 100rpx;
            height: 100rpx;
            background-image: linear-gradient(0deg, 
              #3fd6c7 0%, 
              #86e5dc 100%);
            border-radius: 50rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .tm-message-item-top-right{
            width: 602rpx;
            height: 100%;
            padding-left: 36rpx;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .tm-message-item-top-right-top{
              width: 100%;
              display: flex;
              justify-content: space-between;
              span{
                font-size: 28rpx;
                color: #333333;
              }
              span:nth-child(2){
                font-size: 24rpx;
                color: #aaaaaa;
              }
            }
            .tm-message-item-top-right-bottom{
              font-size: 24rpx;
              line-height: 30rpx;
              color: #aaaaaa;
            }
          }
        }
        .tm-message-item-bottom{
          width: 100%;
          height: 60rpx;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 24rpx;
          box-sizing: border-box;
          span{
            font-size: 24rpx;
            color: #3fd6c7;
          }
        }
      }
      .tm-message-item::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rpx;
        background-color: #ebebeb;
      }
    }
    .none-message{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 200rpx;
      image{
        width: 342rpx;
        height: 254rpx;
      }
      span{
        font-size: 30rpx;
        color: #888888;
        margin-top: 70rpx;
      }
    }
  }
</style>
