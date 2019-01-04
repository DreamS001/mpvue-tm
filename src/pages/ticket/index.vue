<template>
  <div class="container">
    <div class='list'>
      <swiper class="imageContainer" bindchange="handleChange" previous-margin="80rpx" next-margin="80rpx" circular :autoplay="false"  @change="swiperChange">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item class="item" @click="goCommodityCode">
            <div class="itemImg" :class="{ active: swiperIndex == index }">
              <image class="" :src="item"/>
              <div class="item-desc" :class="{ activeDesc: swiperIndex == index }">
                <div class="desc-content">
                  <div class="desc-content-title">华晨宇北京五棵松演唱会</div>
                  <div class="desc-content-location">
                    <i class="iconfont icon-dingwei1" :style="{color: '#aaaaaa', 'font-size': 40 + 'rpx'}"></i>
                    <span>北京市海淀区复兴路69号五棵...</span>
                  </div>
                  <div class="desc-content-date">2018/11/1  19:00</div>
                  <div class="desc-content-position">A区  01座</div>
                </div>
              </div>
              <div class="item-point-box" :class="{ activePoint: swiperIndex == index }">
                <div class="item-point">
                  <block v-for="(item,indexs) in 15" :key="indexs">
                    <span></span>
                  </block>
                </div>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>

      <div class="tm-ticket-point">
        <div class="item-num" v-if="showLength>1"><span>{{swiperIndex+1}}</span>/<span>{{imgUrls.length}}</span></div>
        <div class="item-num" v-else><span>1</span>/<span>{{imgUrls.length}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      imgUrls: [
        '/static/images/ticket/ticket-1.png',
        '/static/images/ticket/ticket-2.png',
        '/static/images/ticket/ticket-3.png'
      ],
      swiperIndex: 0
    }
  },

  components: {
    
  },

  
  computed: {
    showLength () {
      return this.imgUrls.length
    }
  },

  methods: {
    swiperChange(e) {
      console.log(e)
      console.log(e.target.current)
      this.swiperIndex= e.target.current
    },
    goCommodityCode(){
      wx.navigateTo({url:'/pages/commodityCode/main'})
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
page{
  height: 100%;
  background: #f8f8f8;
}
.container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0 0 40rpx 0;
  box-sizing: border-box;
  background: #f8f8f8;
  padding-top: 60rpx;
  box-sizing: border-box;
}
.list{
  width: 100%;
  .imageContainer{
    width: 100%;
    height: 880rpx;
    .item{
      height: 900rpx;
      padding: 0rpx 30rpx 50rpx 30rpx;
      box-sizing: border-box;
      .itemImg{
        position: absolute;
        width: 100%;
        height: 606rpx;
        border-radius: 15rpx;
        z-index: 5;
        opacity: 0.7;
        top: 13%;
        margin-top: 40rpx;
        position: relative;
        border-radius: 20rpx;
        image{
          width: 100%;
          height: 590rpx;
          border-radius: 20rpx;
        }
        .item-desc{
          position: absolute;
          left: 0;
          bottom: -22rpx;
          width: 100%;
          height: 274rpx;
          background-color: #ffffff;
          display: none;
          padding: 56rpx 0 50rpx 37rpx;
          box-sizing: border-box;
          box-shadow: 18rpx 0rpx 35rpx 0rpx 
          rgba(41, 0, 69, 0.09);
          border-radius: 20rpx;
          .desc-content{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            font-size: 24rpx;
            color: #333333;
            .desc-content-title{
              font-size: 28rpx;
              font-weight: 700;
              color: #333333;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .desc-content-location{
              display: flex;
              align-items: center;
              justify-content: flex-start;
              font-size: 24rpx;
              color: #aaaaaa;
            }
            .desc-content-date{

            }
          }
        }
        .item-desc.activeDesc{
          display: block;
        }
        .item-point-box{
          position: absolute;
          top:70%;
          left:50%;
          transform: translate(-50%,-50%);
          width:95%;
          height:18rpx;
          display: none;
          .item-point{
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
              display: inline-block;
              width: 18rpx;
              height: 18rpx;
              background: #e6e3e8;
              border-radius: 9rpx;
            }
          }
        }
        .item-point-box.activePoint{
          display: block;
        }
      }
      .active{
        opacity: 1;
        z-index: 10;
        height: 842rpx;
        top: 7%;
        transition:all .2s ease-in-out 0s;
        margin-top: -58rpx;
      }
    }
  }
  .tm-ticket-point{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #777777;
    margin-top: 67rpx;
    span:nth-child(1){
      font-size: 36rpx;
      font-weight: 700;
      color: #f65656;
    }
  }
}
</style>
