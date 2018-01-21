<template>
  <div class="mui-content">
			<!--图文信息-->
        <div class="dreback">
            <a href='javascript:window.history.go(-1)'>&lt;</a>
        </div>
        <div class="cash-back-details" :style=" 'background-image:url('+prodata.img+');'"></div>
        <div class="cash-back-tit-content">
            <div class="cash-back-tit">
                <h2>{{prodata.name}}</h2>
                <span>{{prodata.cont}}</span>
            </div>
            <div class="cash-back-bot clearfix">
                <div class="comments-list-bot-price fl">
                    <em>￥<b>{{prodata.price}}</b></em>
                    <span>返</span>
                    <strong>{{prodata.fangprice}}</strong>
                </div>
                <div class="fr clearfix">
                    <div class="percentage-out">
                        <div class="percentage-in" :style="'width:'+yigou"></div><em>{{yigou}}</em></div>
                    <div class="cash-back-robbed">已抢<em>{{prodata.yishou}}</em>件</div>
                </div>
            </div>
        </div>
        <!--图文信息-->
        <!--图文详情-->
        <div class="cash-back-details-content">
            <div class="cash-back-details-box">
                <h2>优惠力度：</h2>
                <p>{{prodata.miaoshu}}</p>
                <img :src="prodata.contimg">
            </div>
        </div>
        <!--图文详情-->
        <!--购买流程 关注微信-->
        <div class="sales-process"><img src="/src/assets/images/sales-process-bg.jpg"></div>
        <div class="add-weixin">
            <p><img src="/src/assets/images/add-weixin-icon.png">"首购，就是省"！关注首购网官方微信：*****（点击复制后打开微信粘贴），不定期推送更多专属优惠福利哦。</p>
        </div>
        <!--购买流程 关注微信-->
        <!--评论-->
        <div class="all-comments">
            <div class="all-comments-tit">全部评论({{long}})</div>
                <div class="all-comments-list" v-for="(item) in pinglun">
                    <div class="all-comments-list-img">
                        <img src="/src/assets/images/all-comments-face-img.jpg">
                    </div>
                    <div class="all-comments-list-txt">
                        <div class="user-name">{{item.pinname}}</div>
                        <div class="comments-bot clearfix">
                            <div class="comments-content fl">{{item.pincont}}</div>
                            <div class="huifu fr"><span>回复</span></div>
                        </div>
                    </div>
                </div>
            <div class="open-more" @click="more" v-show="bl"><span>加载更多</span></div>
            <div class="open-more" @click="more" v-show="!bl"><span>已到最底部</span></div>
        </div>
        <!--评论-->
    </div>
</template>

<script>
export default {
  data() {
    return {
      prodata: "",
      yigou: "",
      pinglun: "",
      long: "",
      bl: "true"
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // handleScroll() {
    //   var scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   var dreback = document.querySelector(".dreback");
    //   if (scrollTop < 100) {
    //     dreback.style.display='none';
    //   } else {
    //     dreback.style.display='block'
    //   }
    // },
    more() {
      var start = this.pinglun.length;
      var params = new URLSearchParams();
      params.append("cartid", this.$route.params.uid);
      params.append("start", start);
      this.$http({
        url: "http://localhost:4000/morepinglun",
        method: "post",
        data: params
      }).then(res => {
        this.pinglun = this.pinglun.concat(res.data);
      });
      if (this.pinglun.length == this.long) {
        this.bl = false;
      }
    }
  },
  created() {
    //商品详情
    var params = new URLSearchParams();
    params.append("cartid", this.$route.params.uid);
    this.$http({
      url: "http://localhost:4000/detial",
      method: "post",
      data: params
    }).then(res => {
      this.prodata = res.data[0];
      this.yigou = parseInt(res.data[0].yishou / res.data[0].kucun * 100) + "%";
    });
    //评论
    this.$http({
      url: "http://localhost:4000/pinglun",
      method: "post",
      data: params
    }).then(res => {
      this.pinglun = res.data.dat;
      this.long = res.data.long;
    });
  }
};
</script>

<style>
.dreback {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  text-align: center;
}
.dreback a {
  display: block;
  font: 700 30px/50px "宋体";
  width: 80px;
  height: 50px;
  color: #000;
}
</style>
