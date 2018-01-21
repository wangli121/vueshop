<template>
    <div class="cashback">
        <div class="cashbackhead">
            超级返
        </div>
        <div class="sort-list">
            <ul class="goods-all-tit-list clearfix">
                <li><a class="on" href="javascript:void(0)">最新上线</a></li>
                <li><a href="javascript:void(0)">销量优先</a></li>
                <li><a href="javascript:void(0)">价格排序</a><div class="up-down-icon"><span class="sort-up active"></span><span class="sort-down"></span></div></li>
            </ul>
        </div>
        <div class="cash-back-group" v-for='(item) in fang'>
            <div class="cash-back-item">
                <div class="cash-back-img">
                    <router-link tag='a' :to="{name:'detail',params:{uid:(item.cartid)}}"><img :src="item.img"></router-link>
                </div>
                <div class="cash-back-tit">
                    <a href="Cash-back-details.html">
                        <h2>{{item.name}}</h2>
                        <span>{{item.cont}}</span>
                    </a>
                </div>
                <div class="cash-back-bot clearfix">
                    <div class="comments-list-bot-price fl">
                        <em>￥<b>{{item.price}}</b></em>
                        <span>返</span>
                        <strong>{{item.fangprice}}</strong>
                    </div>
                    <div class="fr clearfix">
                        <div class="percentage-out">
                            <div class="percentage-in" :style="'width:'+parseInt(item.yishou/item.kucun*100)+'%'"></div>
                            <em>{{parseInt(item.yishou/item.kucun*100)+'%'}}</em></div>
                        <div class="cash-back-robbed">已抢<em>{{item.yishou}}</em>件</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.percentage-out em {
    top: -2px;
}
.cashback{
    margin-bottom: 60px;
}
.cashbackhead {
  color: #fff;
  background: #dd2727;
  font: 21px/50px "";
  text-align: center;
}
.mui-content {
  max-width: 100%;
}
.mui-scroll-wrapper {
  height: 40px;
  width: auto;
  right: 10px;
}
.hot-pro-bot-box {
  margin-top: 40px;
}
.mui-icon-back:before,
.mui-icon-left-nav:before {
  background-image: url(../assets/images/h-back-white.png);
}
.mui-bar {
  background-color: #dd2727;
  border-bottom: none;
}
.mui-title {
  height: 50px;
  line-height: 50px;
}
.header h1 {
  color: #fff;
}
.banner {
  margin-top: 40px;
}
.nav-out {
  position: fixed;
  top: 50px;
}
.nav-con {
  top: 90px;
  bottom: 53px;
}
</style>
<script>
export default {
  data() {
    return {
      fang: []
    };
  },
  created() {
    var params = new URLSearchParams();
    params.append("act", "fang");
    this.$http({
      url: "http://localhost:4000/fenglie",
      method: "post",
      data: params
    }).then(res => {
      this.fang = res.data;
    });
  }
};
</script>
