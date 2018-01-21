
import main from './content/main.vue';
import err from './content/err.vue';
import Classification from './content/Classification.vue';
import cashback from './content/Cashback.vue';
import shopcart from './content/ShopCart.vue';
import my from './content/my.vue';
import login from './content/login.vue';
import register from './content/register.vue';
import detail from "./content/detail.vue";
import CFcontone from './content/CFcontone.vue';
import CFconttwo from './content/CFconttwo.vue';
import CFcontthree from './content/CFcontthree.vue';
import miaosha from './content/miaosha.vue';
import OnlineService from './content/OnlineService.vue';
import Setings from './content/Setings.vue';
import xiugai from './content/xiugai.vue';

let routes=[
    {
        path:'/main',
        component:main,
    },
    {
        path:'/Classification',
        component:Classification,
        children:[
            {path:'CFcontone',component:CFcontone},
            {path:'CFconttwo',component:CFconttwo},
            {path:'CFcontthree',component:CFcontthree}
        ]
    },
    {path:'/cashback',component:cashback},
    {path:'/shopcart',component:shopcart},
    {path:'/my',component:my},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {name:'detail',path:'/detail/:uid',component:detail},
    {path:'/miaosha',component:miaosha},
    {path:'/OnlineService',component:OnlineService},
    {path:'/Setings',component:Setings},
    {path:'/xiugai',component:xiugai},
    {path:'/',redirect:'/main'},
    {path:'*',component:err},
];
export default {
    routes:routes,
    mode:'history'
  }