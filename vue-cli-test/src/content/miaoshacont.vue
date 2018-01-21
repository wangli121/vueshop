<template>
  <div class="hot-pro-bot-box">
        <a class="seckill-list" v-for="(item) of miaosha">
            <div class="seckill-list-l">
                <img :src="item.img">
            </div>
            <div class="seckill-list-r">
                <div class="seckill-list-top">
                <h2>{{item.name}}</h2>    
                <span>{{item.cont}}</span>
                </div>
                <div class="seckill-list-center clearfix">
                <div class="seckill-list-time fl"><span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span></div>
                <div class="seckill-list-robbed fr">已抢{{item.yishou}}件</div>
                </div>
                <div class="seckill-list-bot clearfix">
                <div class="fl">
                    <span class="seckill-price">￥<em>{{item.price}}</em></span>
                    <del class="sales-volume">天猫价:{{(item.price*1.4).toFixed(2)}}元</del>
                </div>
                <router-link :to="{name:'detail',params:{uid:(item.cartid)}}" class="fr msq">马上抢></router-link>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            miaosha:[],
            h:0,
            m:0,
            s:0,
        }
    },
  created() {
    var params = new URLSearchParams();
    params.append('act','miaosha')
    this.$http({
        url:'http://localhost:4000/fenglie',
        method:'post',
        data:params
    }).then(res=>{
        this.miaosha=res.data;
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

<style>
.hot-pro-bot-box {
  margin-top: 90px;
}
</style>
