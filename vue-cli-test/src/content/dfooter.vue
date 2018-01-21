<template>
  <header class="header mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <div class="am-dropdown" data-am-dropdown>
            <span class="am-btn am-dropdown-toggle" data-am-dropdown-toggle><em class="header-notice-tips"></em></span>
            <ul class="am-dropdown-content">
                <li class="clearfix">
                    <a href="#"><i><img src="/src/assets/images/header-notice.png"></i>消息<em class="header-notice-tips fr"></em></a>
                </li>
                <li>
                    <a href="Index.html"><i><img src="/src/assets/images/header-home.png"></i>首页</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  border-bottom: none;
  background-color: transparent;
}

.mui-bar-nav ~ .mui-content {
  padding-top: 0;
}

.cash-back-details {
  height: 0;
  padding-bottom: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
