<template>
  <div class="mui-content">
  <!--秒杀--包邮--爆款必抢-->
  <div class="m-b-b-group clearfix">
    <div class="fl">
      <router-link class="miaosha" to='/miaosha' tag='a' style="background-image:url(/src/assets/images/miaosha.jpg);">
        <div class="seckill-list-time">
          <span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span>
        </div>
      </router-link>
    </div>
    <div class="fr">
      <router-link tag='a' to='/miaosha' class="baoyou" href="" style="background-image:url(/src/assets/images/baoyou.jpg);"></router-link>
      <router-link tag='a' to='/miaosha' class="baokuanbiqiang" href="" style="background-image:url(/src/assets/images/baokuanbiqiang.jpg);"></router-link>
    </div>
  </div>
  <!--秒杀--包邮--爆款必抢-->
  <!--栏目列表-->
  <div class="ind-column">
    <ul class="clearfix">
      <li v-for="(item,index) of indcolumn">
        <a href="">
          <div class="ind-column-img"><img :src="item.img"></div>
          <h2 :class="'ind-column-tit'+(Number(index)+1)">{{item.tit}}</h2>
          <p>{{item.describe}}</p>
        </a>
      </li>
    </ul>
  </div>
  <!--栏目列表-->
  
  <!--合肥地区专属公告-->
  <div class="tg-banner">
    <a href="" v-for="(item) in hot">
      <img :src="item.img">
    </a>
  </div>
  <!--合肥地区专属公告-->
  
  <!--产品列表-->
  <template v-for="(item) in pro">
    <div class="ind-pro-list">
      <div class="ind-pro-list-img">
        <router-link :to="{name:'detail',params:{uid:(item.cartid)}}"><img :src="item.img"></router-link>
        <span class="cart-btn"><a href="javascript:0"></a></span>
      </div>
      <div class="ind-pro-list-txt">
        <p>{{item.miaoshu}}</p>
        <span class="ind-more-btn"></span>
      </div>    
      <div class="relation-list">
        <h2>关联推荐</h2>
        <ul class="clearfix">
          <li><a href="#"><span>编辑精选</span></a></li>
          <li><a href="#"><span>个护彩妆</span></a></li>
          <li><a href="#"><span>玉兰油</span></a></li>
        </ul>
      </div>
      <div class="ind-pro-tips">
        <span class="ind-guanzhu on">{{item.love}}</span>
        <span class="ind-shoucang on">{{item.shoucang}}</span>
        <span class="ind-fenxiang on">分享</span>
      </div>
    </div>
  </template>
  <!--产品列表-->

</div>
</template>
<style>

</style>
<script>
export default {
  data() {
    return {
      he: "",
      indcolumn: "",
      hot: "",
      h: "",
      m: "",
      s: "",
      pro: ""
    };
  },
  created() {
    this.$http({
      url: "http://localhost:4000/main",
      method: "post"
    }).then(res => {
      this.he = res.data.a;
      this.indcolumn = res.data.b;
      this.hot = res.data.c;
    });
    this.$http({
      url: "http://localhost:4000/mainpro",
      method: "post"
    }).then(res => {
      this.pro = res.data;
    });
    miaosha: {
      setInterval(() => {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        this.h = 24 - h;
        this.m = 60 - m;
        this.s = 60 - s;
      }, 1000);
    }
  }
};
</script>



