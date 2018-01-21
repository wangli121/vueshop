<template>
  <div>
    <app-banner></app-banner>
    <app-cont></app-cont>
    <app-footer></app-footer>
  </div>
</template>
<style>

</style>
<script>
import banner from './bannner';
import cont from './cont';
import footer from './footer';


export default {
    components:{
        'app-banner':banner,
        'app-footer':footer,
        'app-cont':cont,
    },
};
</script>