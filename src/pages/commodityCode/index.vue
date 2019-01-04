<template>
  <div class="container">
    <!-- 商品验证码 -->
    <div class="commodity-code-content">
      <div class="top">
        <div class="cover-img">
          <image src="/static/images/ticket/ticket-1.png" mode="aspectFill" />
        </div>
        <div class="desc">
          <span>华晨宇北京五棵松演唱会</span>
          <div class="address">
            <i class="iconfont icon-dingwei1" :style="{'font-size':40+'rpx',color:'#aaaaaa'}"></i>
            <span>北京市海淀区复兴路69号五...</span>
          </div>
          <span>2018/11/1  19:00</span>
        </div>
      </div>
      <div class="bottom">
        <div class="QR-code">
          <canvas :style="{width: 200+'rpx', height: 200+'rpx'}" canvas-id="myQrcode"></canvas>
        </div>
      </div>
      <div class="spot-box">
        <block v-for="(i,index) in 15" :key="index">
          <span class="spot"></span>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import drawQrcode from 'weapp-qrcode'
export default {
  data () {
    return {
      
    }
  },

  components: {
    
  },

  methods: {
    
  },

  onLoad(){
    drawQrcode({
      width: 110,
      height: 110,
      canvasId: 'myQrcode',
      text: 'https://www.baidu.com',
      image: {
        imageResource: '/static/images/mine/mine-header.png',
        dx: 35,
        dy: 35,
        dWidth: 40,
        dHeight: 40
      }
    })
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
    justify-content: center;
    align-items: center;
    .commodity-code-content{
      width: 470rpx;
      height: 880rpx;
      // background-color: #f8f8f8;
      margin-top: 130rpx;
      border-radius: 20rpx;
      position: relative;
      .top{
        width: 100%;
        height: 610rpx;
        border-radius: 20rpx;
        background: #ffffff;
        box-shadow: 0rpx 12rpx 62rpx 0rpx 
         rgba(41, 0, 69, 0.17);
        display: flex;
        flex-direction: column;
        align-items: center;
        .cover-img{
          width: 400rpx;
          height: 400rpx;
          margin-top: 40rpx;
          image{
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }
        }
        .desc{
          width: 400rpx;
          margin-top: 5rpx;
          span{
            font-size: 28rpx;
            color: #333333;
            padding-left: 10rpx;
            box-sizing: border-box;
          }
          .address{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 2rpx 0;
            span{
              overflow: hidden; 
              text-overflow:ellipsis; 
              white-space: nowrap;
              font-size: 24rpx;
              color: #aaaaaa;
            }
          }
        }
      }
      .bottom{
        width: 100%;
        height: 260rpx;
        background: #ffffff;
        margin-top: 10rpx;
        border-radius: 20rpx;
        box-shadow: 0rpx 12rpx 62rpx 0rpx 
         rgba(41, 0, 69, 0.17);
        display: flex;
        justify-content: center;
        align-items: center;
        .QR-code{
          width: 210rpx;
          height: 210rpx;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .spot-box{
        width: 440rpx;
        height: 10rpx;
        position: absolute;
        left: 50%;
        bottom: 261rpx;
        transform: translateX(-50%);
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 0 5rpx;
        box-sizing: border-box;
        border-radius: 5rpx;
        .spot{
          display: inline-block;
          width: 10rpx;
          height: 10rpx;
          border-radius: 5rpx;
          background: rgba(41, 0, 69, 0.17);
        }
      }
    }
  }
</style>
