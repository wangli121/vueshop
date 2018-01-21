<template>
   <footer class="footer ind-footer mui-bar-tab" id="footer">
    <ul class="display-box-middle">
      <li>
        <router-link to='/main' tag='a' active-class="on">
          <span class="footer-icon footer-index"></span><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to='/Classification/CFcontone' tag='a' active-class="on">
          <span class="footer-icon footer-classification"></span><span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to='/cashback' tag='a' active-class="on">
          <span class="footer-icon footer-cash-back"></span><span>超级返</span>
        </router-link>
      </li>
      <li>
        <router-link :to="uname?'/shopcart':'/login'" tag='a' active-class="on">
          <span class="footer-icon footer-cart"></span><span>购物车</span>
        </router-link>
      </li>
      <li>
        <router-link :to="uname?'/my':'/login'" tag='a' active-class="on">
          <span class="footer-icon footer-my"></span><span>我的首购</span>
        </router-link>
      </li>
    </ul>
  </footer>
    
</template>
<style>

</style>
<script>
export default {
  data() {
    return {
      uname:localStorage.getItem("username"),
    };
  },
  methods: {
    // tomy() {
    //   var uname = localStorage.getItem("username");
    //   if(uname){
    //     return '/my';
    //   }else{
    //     alert('请先登录！');
    //     this.$router.push('/main');
    //   }
    // }
  }
};
</script>
