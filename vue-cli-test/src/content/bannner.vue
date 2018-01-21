<template>
        <!-- <ul class="banner-pics-list OnSale-banner">
            <li><a href="#"><img src="../assets/images/banner640x386.jpg" alt=""/></a></li>
        </ul> -->
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="/src/assets/images/banner640x386.jpg"></swiper-slide>
            <swiper-slide><img src="/src/assets/images/banner3.jpg"></swiper-slide>
            <swiper-slide><img src="/src/assets/images/banner2.jpg"></swiper-slide>
            <swiper-slide><img src="/src/assets/images/banner1.jpg"></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
</template>
<style>

</style>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "carrousel",
  data() {
    return {
      banners:[],
      swiperOption: {
        autoplay:true,
        notNextTick: true,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
      }
    };
  },
  created(){
    this.$http({
      url:'http://localhost:4000/lunbo',
      method:'post',
    }).then(res=>{
      this.banners =res.data
      // console.log(this.lunbo)
    })
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>