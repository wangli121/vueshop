import Vue from 'vue'
import App from './App.vue'

//引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//index样式
import "./assets/css/amazeui.min.css";
import './assets/css/base.css';
import './assets/css/common.css';

//连接路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入路由配置
import routes from './router-config';
//创建路由对象
const router = new VueRouter(routes)

//状态管理
import store from './store';

import axios from './assets/js/axios'

Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  data:{
    token:localStorage.getItem('username'),
  },
  render: h => h(App),
  router,//注册路由
  store,
  
})
