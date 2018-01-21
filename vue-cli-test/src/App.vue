<template>
  <div id="app">
    <app-header v-show="bHead"></app-header>
    <router-view></router-view>
    <app-footer v-show="bFoot"></app-footer>
  </div>
</template>

<script>
import header from "./content/header.vue";
import footer from "./content/footer.vue";
import main from "./content/main.vue";

import Classification from "./content/Classification";
import cashback from "./content/Cashback";
import shopcart from "./content/ShopCart";
import my from "./content/my";
import login from "./content/login";
import register from "./content/register";

import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      tittle: "首页"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.listenrout(this.$route.path);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var hd = document.getElementById("hd");
      if (scrollTop >= 70) {
        hd.style.background = "rgb(221, 39, 39)";
      } else {
        hd.style.background = "";
      }
    },
    listenrout(path) {
      if (/main/.test(path)) {
        this.$store.dispatch("showHead");
        this.$store.dispatch("showFoot");
      }
      if (/Classification|cashback|shopcart|my/.test(path)) {
        this.$store.dispatch("hideHead");
        this.$store.dispatch("showFoot");
      }
      if (/err|detail|login|miaosha|OnlineService|Setings|xiugai/.test(path)) {
        this.$store.dispatch("hideHead");
        this.$store.dispatch("hideFoot");
      }
    }
  },
  watch: {
    $route(router) {
      let path = router.path;
      this.listenrout(path);
    }
  },
  computed: mapGetters(["bHead", "bFoot"]),
  components: {
    "app-header": header,
    "app-footer": footer,
    "app-main": main,
    "app-Classification": Classification,
    "app-cashback": cashback,
    "app-shopcart": shopcart,
    "app-my": my,
    "app-login": login,
    "app-register": register
  }
};
</script>

<style lang="scss">

</style>
