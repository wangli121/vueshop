<template>
  <div class="mui-content" id="slider">
    <app-miaoshahead></app-miaoshahead>
    <app-miaoshacont></app-miaoshacont>
  </div>
</template>

<script>
import miaoshahead from './miaoshahead';
import miaoshacont from './miaoshacont';
export default {
  components: {
    "app-miaoshahead": miaoshahead,
    "app-miaoshacont": miaoshacont
  }
};
</script>

<style>

</style>
