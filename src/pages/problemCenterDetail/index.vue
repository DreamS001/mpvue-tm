<template>
  <div class="container">
    <!-- 问题详情 -->
    <div class="tm-problem-title">会员购买失败怎么办？</div>

    <div class="tm-problem-content">
      <span>包裹签收前，您可以在订单详情页的地址栏，点击"修改地址/电话"，在地址列表内添加新地址，或者勾选其他地址。</span>
      <span>修改结果会在48小时内通过短信通知您，请留意查看，您也可以在订单详情页查看"修改状态"，了解修改进度。</span>
      <span>备注：修改地址不保证100%修改成功，如修改失败/待定，原地址无法签收，建议您拒收处理；或原地址签收后安排转寄，寄出后请您联系薯客服提供运单号与运费金额。</span>
    </div>

    <!-- <div class="tm-problem-footer">
      <span>联系客服</span>
    </div> -->
    <button class="tm-problem-footer" open-type="contact" @click="handleContact">联系客服</button>
  </div>
</template>

<script>


export default {
  data () {
    return {
      
    }
  },

  components: {
    
  },

  methods: {
    handleContact(e) {
      console.log(e.path)
      console.log(e.query)
    }
  },

  onLoad(){
    // const _this=this;
    // console.log(this.$root.$mp.query.id)//获取url传过来的参数
    const urlId=this.$root.$mp.query.id
    console.log(urlId)
    // if(urlId==1){
    //   wx.setNavigationBarTitle({
    //     title: '99专区',
    //     success(){
    //       _this.text='99专区'
    //     }
    //   })
    // }else{
    //   wx.setNavigationBarTitle({
    //     title: '199专区',
    //     success(){
    //       _this.text='199专区'
    //     }
    //   })
    // }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .tm-problem-title{
    width: 100%;
    height: 100rpx;
    font-size: 26rpx;
    font-weight: 700;
    color: #333333;
    line-height: 100rpx;
    padding-left: 48rpx;
    box-sizing: border-box;
    border-bottom: 2rpx solid #eeeeee;
  }
  .tm-problem-content{
    width: 100%;
    padding: 25rpx 46rpx 0;
    box-sizing: border-box;
    span{
      display: inline-block;
      font-size: 22rpx;
      line-height: 33rpx;
      color: #aaaaaa;
      margin-bottom: 30rpx;
    }
  }
  .tm-problem-footer{
    width: 100%;
    height: 98rpx;
	  background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    line-height: 98rpx;
    font-size: 28rpx;
    color: #333333;
  }
</style>
