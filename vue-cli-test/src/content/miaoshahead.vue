<template>
  <div class="hot-pro-top-box">
        <!--导航-->
        <div class="miaoshahtitle">
            <a class="miaoshahreturn" href="javascript:window.history.go(-1)" >&lt;</a>
            <span class="miaosha">秒杀</span>
        </div>
        <!--导航-->
        
        <!--排序-->
        <div class="sort-list">
        <ul class="goods-all-tit-list clearfix">
            <li><a class="on" href="#">最新上线</a></li>
            <li><a href="#">销量优先</a></li>
            <li><a href="#">价格排序</a><div class="up-down-icon"><span class="sort-up active"></span><span class="sort-down"></span></div></li>
        </ul>
        </div>
        <!--排序-->
    </div> 
</template>

<script>
export default {

}
</script>

<style>
.miaoshahtitle{
    background: #f8f8f8;
}
div.hot-pro-top-box{
    top: 0;
    font: outline;
}
.miaoshahtitle span{
    text-align: center;
    display:inline-block;
    font:21px/44px '';
}
.miaoshahtitle .miaosha{
    width: 80%;
    margin-left: -9%;
    
}
.miaoshahtitle .miaoshahreturn{
    text-align: center;
    display:inline-block;
    font:700 21px/44px '宋体'; 
    width: 18%;
    color: #000;
}
</style>
