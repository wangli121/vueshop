<template>
  <div class="mui-content log" >
    <form>
        <div class="registration-area mui-input-row">
            <label>账号：<input type="text" v-model="uname" class="mui-input-clear" placeholder="账号" autofocus="autofocus" /></label>
        </div>
        <div class="registration-area mui-input-row">
            <label>密码：<input type="password" v-model="pword" class="mui-input-clear" placeholder="密码" /></label>
        </div>
        <div class="settings-btn">
            <button class="btn" type="button" @click="getData">登录</button>
            <router-link tag='a' class="login-a" to='/register'>没有账号先注册！</router-link>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      pword: ""
    };
  },
  methods: {
    getData() {
      var params = new URLSearchParams();
      params.append("username", this.uname);
      params.append("password", this.pword);
      params.append("act", "login");
      this.$http({
        url: "http://localhost:4000/login",
        method: "post",
        data: params
      }).then(res => {
        if (res.data.stat == 2) {
          var token = res.data.id.username;
          localStorage.setItem("username",token);
          location.reload();
          this.$router.push({ path: "/main" });
        } else {
          alert("登录失败");
        }
      });
      
    }
  },
};
</script>

<style>
.mui-content.log {
  background: url("/src/assets/images/login.png") no-repeat center 50px;
  background-size: 160px 160px;
}
.mui-content.log {
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
.login-a {
  text-align: right;
  margin-top: 10px;
  text-decoration: underline;
}
</style>
