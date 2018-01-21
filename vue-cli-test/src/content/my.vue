<template>
  <div class="my">
      <div class="my-head">
			<div class="my-head-top">
				<a href="Account-modification.html">
					<div class="my-head-face-box">
						<div class="my-head-face"><img src="/src/assets/images/my-face.jpg"></div>
					</div>
					<h1>{{this.$root.token}}</h1>
					<router-link to='/login' tag='p' class="cancel" @click.native='cancel'>注销</router-link>
				</a>
			</div>
			<div class="notice-box">
				<span class="notice-icon"><img src="/src/assets/images/notice-icon.png"><em>2</em></span>
				<span>消息</span>
			</div>
		</div>
		<div class="mui-content">
			<!--栏目列表-->
			<div class="my-group clearfix">
				<div class="my-item">
					<div class="my-item-box">
						<router-link to='/shopcart' tag='a'>
							<span><img src="/src/assets/images/my-order.png"></span>
							<h2>我的订单</h2>
						</router-link>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<a href="#">
							<span><img src="/src/assets/images/my-footprints.png"></span>
							<h2>我的足迹</h2>
						</a>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<a href="#">
							<span><img src="/src/assets/images/my-collection.png"></span>
							<h2>我的收藏</h2>
						</a>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<a href="#">
							<span><img src="/src/assets/images/my-comment.png"></span>
							<h2>评论记录</h2>
						</a>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<a href="#">
							<span><img src="/src/assets/images/my-reward.png"></span>
							<h2>邀请奖励</h2>
						</a>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<router-link to='/xiugai'>
							<span><img src="/src/assets/images/my-account-modification.png"></span>
							<h2>账号修改</h2>
						</router-link>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<router-link tag='a' to='/OnlineService'>
							<span><img src="/src/assets/images/my-feedback.png"></span>
							<h2>问题反馈</h2>
						</router-link>
					</div>
				</div>
				<div class="my-item">
					<div class="my-item-box">
						<router-link to='/Setings'>
							<span><img src="/src/assets/images/my-set-up.png"></span>
							<h2>综合设置</h2>
						</router-link>
					</div>
				</div>
			</div>
			<!--栏目列表-->
			<!--商家合作报名专区-->
			<div class="cooperation-link">
				<a href="Registration-area.html">商家合作报名专区</a>
			</div>
			<!--商家合作报名专区-->
		</div>
  </div>
</template>

<script>
export default {
  methods: {
    cancel() {
      localStorage.removeItem("username");
      localStorage.removeItem("shopcart");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.cancel {
  width: 32px;
  margin: 0 auto;
  color: #fff;
}
</style>
