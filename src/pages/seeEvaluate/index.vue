                                                                                                                                         <template>
  <div class="container">
    <!-- 订单评价 -->
    <div class="tm-myorder-list-item">
      <div class="tm-item-top">订单购买日期：{{goodsData.orderDate}}</div>
      <div class="tm-item-bottom">
        <div class="tm-item-bottom-left">
          <image :src="goodsData.goodsUrl" />
        </div>
        <div class="tm-item-bottom-right">
          <div class="tm-item-bottom-right-top">
            <span class="tm-item-bottom-right-top-title">{{goodsData.goodsName}}</span>
            <span class="tm-item-bottom-right-top-member">{{goodsData.member}}会员</span>
          </div>
          <div class="tm-item-bottom-right-middle">
            <div class="tm-middle-left">
              <span>{{goodsData.goodsDate}}</span>
              <span>{{goodsData.address}}</span>
            </div>
          </div>
          <div class="tm-item-bottom-right-bottom">
            <span>{{goodsData.goodsNum}}张</span>
            <div class="tm-middle-right">
              <span>￥</span>
              <span>{{goodsData.goodsNewPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-evaluate-box">
      <div class="tm-evaluate-score">
        <span class="evalutate-word">综合评价</span>
        <div class="score">
          <i class="iconfont icon-pingjia" :style="{'font-size':60+'rpx',color:'#f65656'}"></i>
          <i class="iconfont icon-pingjia" :style="{'font-size':60+'rpx',color:'#f65656'}"></i>
          <i class="iconfont icon-pingjia" :style="{'font-size':60+'rpx',color:'#f65656'}"></i>
          <i class="iconfont icon-pingjia" :style="{'font-size':60+'rpx',color:'#f65656'}"></i>
          <i class="iconfont icon-pingjia" :style="{'font-size':60+'rpx',color:'#aaaaaa'}"></i>
        </div>
        <span class="evalutate-score">4.9</span>
      </div>
      <div class="tm-comment">
        <div class="tm-textarea">延续开心麻花一贯的风格，运用了许多当下流行的梗，两小时“哈哈哈”。套着百老汇的外衣，演着北京城的故事。</div>
        <div class="tm-label-box">
          <div class="tm-label-item">#现场不错#</div>
          <div class="tm-label-item">#气氛很好#</div>
        </div>
        <div class="tm-img">
          <block v-for="(item,index) in images" :key="index">
            <div class="tm-img-item">
              <image :src="item" mode="aspectFill"  :data-idx="index" @click="previewImg"/>
            </div>
          </block>
        </div>
      </div>
    </div>

    
    <!-- <div class="tm-comment-btn">提交评论</div> -->
  </div>
</template>

<script>


export default {
  data () {
    return {
      goodsData:{id:1,orderDate:'2018年11月1日',goodsUrl:'/static/images/goods/goods2.png',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'2',address:'北京市 / 人民艺术中心',goodsNewPrice:'66',member:'199',type:'overevaluate'},
      images:['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546505573&di=e738466ca62dead494f90d3e0bf245e5&src=http://article.fd.zol-img.com.cn/t_s640x2000/g5/M00/07/09/ChMkJ1frZdqIHGarAABhZAKcrQQAAWbaQDm398AAGF8431.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546515657633&di=af13406206b2ee1ea4675e8681aae5ce&imgtype=0&src=http%3A%2F%2Fp1.so.qhimgs1.com%2Ft012c059b1fc02def31.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546515657633&di=aaf087cd7e348750384a0bab48ef4739&imgtype=0&src=http%3A%2F%2Fpic.kekenet.com%2F2018%2F0115%2F29311516009681.jpg']
    }
  },

  components: {
    
  },

  methods: {
    // 预览图片
    previewImg(e) {
      //获取当前图片的下标
      var index = e.currentTarget.dataset.idx;
      // console.log(index)
      //所有图片
      var imgs = this.images
      // var objkeys = Object.keys(this.images);
      // for(var i=0;i<=objkeys.length-1;i++){
      //   var obj={}
      //   obj.img_url=this.images[i].img_url
      //   imgs.push(obj);
      //   console.log(imgs)
      // }
      console.log(imgs[index])

      wx.previewImage({
      //当前显示图片
        current: imgs[index],
        //所有图片
        urls: imgs
      })
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .tm-myorder-list-item{
      width: 100%;
      height: 340rpx;
      background-color: #ffffff;
      margin-top: 30rpx;
      padding: 0 24rpx;
      box-sizing: border-box;
      .tm-item-top{
        width: 100%;
        height: 84rpx;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 24rpx;
        color: #777777;
      }
      .tm-item-bottom{
        width: 100%;
        padding: 37rpx 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tm-item-bottom-left{
          width: 180rpx;
          height: 180rpx;
          border-radius: 6rpx;
          image{
            width: 100%;
            height: 100%;
            border-radius: 6rpx;
          }
        }
        .tm-item-bottom-right{
          width: 520rpx;
          height: 180rpx;
          .tm-item-bottom-right-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
              display: inline-block;
            }
            .tm-item-bottom-right-top-title{
              width: 365rpx;
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
            }
            .tm-item-bottom-right-top-member{
              width: 90rpx;
              height: 30rpx;
              border-radius: 4rpx;
              border: solid 1px #76a0ee;
              font-size: 20rpx;
              line-height: 30rpx;
              color: #76a0ee;
              text-align: center;
            }
          }
          .tm-item-bottom-right-middle{
            width: 100%;
            height: 68rpx;
            margin-top: 30rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tm-middle-left{
              height: 100%;
              padding-left: 20rpx;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              font-size: 24rpx;
              color: #333333;
            }
          }
          .tm-item-bottom-right-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 20rpx;
            box-sizing: border-box;
            span{
              font-size: 24rpx;
              color: #f65656;
            }
            .tm-middle-right{
              span{
                font-size: 36rpx;
                color: #f65a5a;
              }
              span:nth-child(1){
                font-size: 24rpx;
                color: #f65a5a;
              }
            }
          }
        }
      }
    }
    .tm-evaluate-box{
      width: 100%;
      // height: 500rpx;
      background-color: #ffffff;
      margin-top: 30rpx;
      .tm-evaluate-score{
        width: 100%;
        height: 137rpx;
        border-bottom: 2rpx solid #f1f1f1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .evalutate-word{
          font-size: 28rpx;
          color: #333333;
        }
        .score{
          display: flex;
          width: 364rpx;
          justify-content: space-around;
          align-items: center;
        }
        .evalutate-score{
          font-size: 78rpx;
          color: #f65a5a;
        }
      }
      .tm-comment{
        width: 100%;
        // height: 360rpx;
        .tm-textarea{
          width: 100%;
          // height: 200rpx;
          padding: 24rpx;
          box-sizing: border-box;
          font-size: 28rpx;
          color: #777777;
        }
        .tm-label-box{
          width: 100%;
          padding: 0 24rpx;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .tm-label-item{
            font-size: 28rpx;
            color: #777777;
            margin-right: 10rpx;
          }
        }
        .tm-img{
          width: 100%;
          height: 220rpx;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0 24rpx;
          box-sizing: border-box;
          margin-top: 30rpx;
          margin-bottom: 20rpx;
          .tm-img-item{
            width: 220rpx;
            height: 220rpx;
            image{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .tm-comment-btn{
      width: 620rpx;
      height: 88rpx;
      background-image: linear-gradient(0deg, 
        #3fd6c7 0%, 
        #86e5dc 100%), 
      linear-gradient(
        #81d8ce, 
        #81d8ce);
      background-blend-mode: normal, 
        normal;
      box-shadow: 2rpx 6rpx 10rpx 0rpx 
        rgba(24, 176, 182, 0.3);
      border-radius: 44rpx;
      margin-top: 50rpx;
      font-size: 36rpx;
      line-height: 88rpx;
      text-align: center;
      color: #ffffff;
    }
  }
</style>
