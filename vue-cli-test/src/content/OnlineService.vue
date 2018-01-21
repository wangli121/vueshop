<template>
    <div class="mui-content">
        <div class="olinetitle">
            <a class="olinereturn" href="javascript:window.history.go(-1)" >&lt;</a>
            <span class="olinetext">问题反馈</span>
        </div>
        <div class="online-service-group">
        <div class="online-service-item online-service-qq"><img src="/src/assets/images/qq-icon.png"></div>
        <div class="online-service-item online-service-feedback"><a href="#">有问题请反馈给我</a></div>
        <div class="online-service-item online-service-time"><p>周一至周日&nbsp;&nbsp;8:00-23:00</p></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.olinereturn {
  font: 700 21px/42px "宋体";
  display: inline-block;
  width: 20%;
  text-align: center;
  color: #000;
}
.olinetext {
  font: 21px/42px "";
  display: inline-block;
  width: 60%;
  text-align: center;
}
.olinetitle {
  height: 42px;
  border-bottom: 1px solid #dcdcdc;
}
</style>
