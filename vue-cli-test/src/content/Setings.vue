<template>
  <div class="mui-content">
    <div class="setingstitle">
        <a class="setingsreturn" href="javascript:window.history.go(-1)" >&lt;</a>
        <span class="setingstext">问题反馈</span>
    </div>
  <div class="settings-group">
    <div class="settings-item">
      <span>消息通知开关</span>
      <div class="mui-switch mui-switch-mini">
          <div class="mui-switch-handle"></div>
      </div>
    </div>
    <div class="settings-item highlight right-arrow"><span>清除缓存</span><em class="fr">4.65M</em></div>
    <div class="settings-item highlight"><span>当前版本</span><em class="fr">V.12.1</em></div>
    <div class="settings-item highlight right-arrow"><span>喜欢首购？打分鼓励一下吧</span></div>
  </div>
  <div class="settings-btn"><button class="btn" type="button" @click="cancel">退出登录</button></div>
</div>
</template>

<script>
export default {
  methods: {
    cancel() {
      localStorage.removeItem("username");
      localStorage.removeItem("shopcart");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.setingsreturn {
  font: 700 21px/42px "宋体";
  display: inline-block;
  width: 20%;
  text-align: center;
  color: #000;
}
.setingstext {
  font: 21px/42px "";
  display: inline-block;
  width: 60%;
  text-align: center;
}
.setingstitle {
  height: 42px;
  border-bottom: 1px solid #dcdcdc;
}
</style>
