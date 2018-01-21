<template>
  <div class="mui-content mui-row mui-fullscreen cf">
      <div id="header" class="search-head header mui-bar mui-bar-nav">
      <div class="search-box">
        <input id="search" class="search-input" type="search" name="search" placeholder="搜索想要的宝贝">
      </div>
      <div class="notice-box">
        <span class="notice-icon"><img src="/src/assets/images/notice-icon.png"><em>2</em></span>
        <span>消息</span>
      </div>
    </div>
    <div class="mui-col-xs-3 myscroll">
        <ul id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
            <li class="left-tit" v-for="(item) of cfmenu">
              <router-link :to='item.tohref' tag='a' class='mui-control-item' >{{item.title}}</router-link>
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      cfmenu:[
        {title:'近期热门',tohref:'/Classification/CFcontone'},
        {title:'妈咪宝贝',tohref:'/Classification/CFconttwo'},
        {title:'个护彩妆',tohref:'/Classification/CFcontthree'}
      ]
    }
  }
};
</script>
<style>
.cf.mui-content {
  float: left;
  width: 25%;
  text-align: center;
}
.mui-col-xs-3.myscroll{
  margin-top: 50px;
}
.mui-bar-nav ~ .mui-content {
  overflow: hidden;
}
.mui-row.mui-fullscreen > [class*="mui-col-"] {
  height: 100%;
}
.mui-segmented-control .mui-control-item {
  line-height: 50px;
  width: 100%;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  background-color: #fff;
}
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item,
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item.mui-active {
  color: #505050;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
}
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item.mui-active {
  color: #dd2727;
}
</style>

