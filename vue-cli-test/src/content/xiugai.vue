<template>
    <div class="mui-content">
        <div class="xiugaititle">
            <a class="xiugaireturn" href="javascript:window.history.go(-1)" >&lt;</a>
            <span class="xiugaitext">账号修改</span>
        </div>
        <div class="settings-group">
            <div class="settings-item highlight right-arrow modification-face"><a href="#"><span class="face-img fl"><img src="/src/assets/images/face-img.jpg"></span><em class="fr">修改头像</em></a></div>
            <div class="settings-item highlight right-arrow"><a href="#"><span class="name-icon">昵称</span><em class="fr">蝎子</em></a></div>
            <div class="settings-item highlight right-arrow"><a href="#"><span class="mobile-icon">手机号</span><em class="fr">136****1510</em></a></div>
            <div class="settings-item highlight right-arrow"><a href="#"><span class="address-icon">收货地址</span></a></div>
            <div class="settings-item highlight right-arrow" @click="bl=!bl">
                <a href="#"><span class="password-icon">密码修改</span></a>
            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bl:false,
        }
    }
}
</script>

<style>
.xiugaireturn {
  font: 700 21px/42px "宋体";
  display: inline-block;
  width: 20%;
  text-align: center;
  color: #000;
}
.xiugaitext {
  font: 21px/42px "";
  display: inline-block;
  width: 60%;
  text-align: center;
}
.xiugaititle {
  height: 42px;
  border-bottom: 1px solid #dcdcdc;
}
</style>
