<template>
  <div id="segmentedControlContents" class="mui-col-xs-9 myscroll cf" style="border-left: 1px solid #c8c7cc;">
    <router-view></router-view>
  </div>
</template>
<style>
#segmentedControlContents.cf{
    margin-top: 50px;
    float: left;
    width: 75%;
    min-height: 564px;
}
</style>
<script>
import CFcontone from './CFcontone';
import CFconttwo from './CFconttwo';
import CFcontthree from './CFcontthree';
export default{
  components:{
    'app-CFcontone':CFcontone,
    'app-CFconttwo':CFconttwo,
    'app-CFcontthree':CFcontthree,
  }
}
</script>
