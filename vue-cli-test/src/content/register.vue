<template>
  <div class="mui-content reg">
        <form>
            <div class="registration-area mui-input-row">
                {{waring[0]}}<label>账号：<input type="text" v-model="uname" @blur="unamereg" :class="'mui-input-clear'+' '+waring[0]" placeholder="账号" autofocus="autofocus" /></label>
            </div>
            <div class="registration-area mui-input-row">
                {{waring[1]}}<label>密码：<input type="password" v-model="pword" @blur="updreg" :class="'mui-input-clear'+' '+waring[1]" placeholder="密码" /></label>
            </div>
            <div class="settings-btn">
                <button class="btn" type="button" @click="regData" >注册</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      pword: "",
      yname: 0,
      ypw: 0,
      waring:[],
    };
  },
  methods: {
    regData() {
      if (this.yname + this.ypw == 2) {
        var params = new URLSearchParams();
        params.append("username", this.uname);
        params.append("password", this.pword);
        params.append("act", "reg");

        this.$http({
          url: "http://localhost:4000/login",
          method: "post",
          data: params
        }).then(res => {
          if (res.data == 2) {
            alert("恭喜你注册成功！请登录");
            this.$router.push({ path: "/login" });
          } else {
            alert("注册失败");
          }
        });
      }else{
        alert('请先填写完注册信息')
      }
    },
    unamereg() {
      var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (uPattern.test(this.uname)) {
        this.yname = 1;
        console.log(this.yname)
        this.waring[0]='';
      } else {
        this.uname = "";
        this.yname = 0;
        this.waring[0]='waring';
        alert("用户名：4到16位（字母，数字，下划线，减号）");
      }
    },
    updreg() {
      var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
      if (pPattern.test(this.pword)) {
        this.ypw = 1;
        console.log(this.ypw)
        this.waring[1]='';
      } else {
        this.pword = "";
        this.ypw = 0;
        this.waring[1]='waring';
        alert("最少6位，包括至少1个大写字母或1个小写字母");
      }
    }
  }
};
</script>

<style>
.mui-content.reg {
  width: 80%;
  margin: 0 auto;
  padding-top: 200px;
}
.registration-area input[type="password"] {
  margin-bottom: 0;
  border: 1px solid #d9d9d9;
  padding: 10px 30px 10px 15px;
  font-size: 14px;
}
input.mui-input-clear.waring{
  border-color:#f00
}
</style>
