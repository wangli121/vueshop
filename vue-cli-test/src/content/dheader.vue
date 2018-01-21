<template>
  <footer class="footer mui-bar-tab display-box-middle" id="footer">
        <div class="Cash-back-details-l">
            <span class="icon-guanzhu">263</span>
            <span class="icon-xinxi">10</span>
            <span class="icon-fenxiang">分享</span>
        </div>
        <div class="shopcart">
            <router-link to='/shopcart'>购物车</router-link>
        </div>
        <div class="Cash-back-details-r">
            <a class="addshop" @click="addshop">加入购物车</a>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      // num:1,
      // obj:{},
      shopcart: []
    };
  },
  created() {
    var params = new URLSearchParams();
    params.append("uname", this.$root.token);
    this.$http({
      url: "http://localhost:4000/setlocalstroage",
      method: "post",
      data: params
    }).then(res => {
      // console.log(res.data[0].shopcart.split(','));
      localStorage.setItem('shopcart',this.shopcart)
      // console.log(res.data[0].shopcart == "");
      if (res.data[0].shopcart == "") {
      } else {
        localStorage.setItem("shopcart", res.data[0].shopcart.split(","));
        this.shopcart = res.data[0].shopcart.split(",");
      }
      // var sc = localStorage.getItem("shopcart");
      // if (sc) {
      //   var sc = (sc).split(",").concat(res.data[0].shopcart.split(','));
      //   this.shopcart = sc;
      //   console.log(this.shopcart)
      // }
    });
  },
  methods: {
    addshop() {
      console.log(this.shopcart);
      this.shopcart.push(this.$route.params.uid);
      localStorage.setItem("shopcart", this.shopcart);
      var params = new URLSearchParams();
      params.append("shopcart", this.shopcart);
      params.append("uname", this.$root.token);
      this.$http({
        url: "http://localhost:4000/savecart",
        method: "post",
        data: params
      }).then(res => {
        //   console.log(res.data[0].shopcart);
      });
      // console.log(this.shopcart)
    }
    // savelocal() {
    // localStorage.setItem("shopcart", this.shopcart);
    // var params = new URLSearchParams();
    // params.append("shopcart", this.shopcart);
    // params.append("uname", this.$root.token);
    // this.$http({
    //   url: "http://localhost:4000/savecart",
    //   method: "post",
    //   data: params
    // }).then(res => {
    //   //   console.log(res.data[0].shopcart);
    // });
    // }
  }
};
</script>

<style>
.shopcart a {
  text-align: center;
  font: 700 12px/30px "";
  color: #fff;
  width: 90px;
  border-radius: 90px;
  background: #dd2727;
}
</style>
