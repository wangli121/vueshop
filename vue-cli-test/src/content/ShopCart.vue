<template>
    <div class="mui-content cl">
        <div class="shophead">购物车</div>
        <div class="shopcart-group">
            <div class="shopcart-tit clearfix">
                <div class="check-box fl"><label><input type="checkbox" value="" name="newslist" id="newslist-1" class="newslist"></label></div>
                <span class="fl"><a href="#">帮宝适</a></span>
                <span class="fr clearfix"><a href="#">领券</a><a @click="bool=!bool" href="#">编辑</a></span>
            </div>
            <ul class="shopcart-item">
                <template v-for='(item,index) in data'>
                    <router-link :to="'/detail/'+item.cartid" tag='li' class="clearfix">  
                    <div class="check-box">
                        <label>
                            <input type="checkbox" :checked='bl[index]' @click="check(index)" value="" name="newslist" id="newslist-1" class="newslist">
                        </label>
                    </div>
                    <div class="pro-details">
                        <div class="pro-details-l">
                            <a href="#"><img :src="item.img"></a>
                            <p>已降{{parseInt(item.price*0.2)}}元</p>
                        </div>
                        <div class="pro-details-r">
                            <div class="pro-details-top">
                                <a href="#">
                                    <h2 class="pro-details-text-tit">{{item.name}}</h2>
                                    <p class="pro-details-text-des">{{item.cont}}</p>
                                </a>
                            </div>
                            <div class="pro-details-tips clearfix">
                                <em>￥{{item.price}}</em>
                                <del>
                                    ￥{{parseInt(item.price*1.2)}}
                                </del>
                                <span>手机专享价</span>
                                <div class="pro-number fr">
                                    <button v-show="bool" @click="countadd(index,item.cartid)">+</button>
                                    x<strong>{{count[item.cartid]}}</strong>
                                    <button v-show="bool" @click="countodd(item.cartid)">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                </template>
            </ul>
        </div>
        <div id="shopcart-footer" class="shopcart-footer">
            <div class="check-box"><label class="checkall"><input id="checkAll" @click="checkall" class="allselect" type="checkbox">&nbsp;全选</label></div>
            <div class="total">
                <em>合计：￥{{total}}</em>
                <span>不含运费</span>
            </div>
            <div class="closing">
                <a href="#" class="btn-sub">去结算</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      count: {},
      bl: [],
      total: 0,
      bool: false
    };
  },
  created() {
    var params = new URLSearchParams();
    params.append("uname", this.$root.token);
    this.$http({
      url: "http://localhost:4000/getcart",
      method: "post",
      data: params
    }).then(res => {
      this.data = res.data.data;
      this.count = res.data.cont;
      if (this.data) {
        for (var i = 0; i < res.data.data.length; i++) {
          this.bl.push(false);
        }
      }
    });
  },
  methods: {
    //选取当个
    check(index) {
      this.bl.splice(index, 1, !this.bl[index]);
      var price = this.data[index].price;
      var count = this.count[this.data[index].cartid];
      if (this.bl[index]) {
        this.total += price * count;
      } else {
        this.total -= price * count;
      }
    },
    //全选
    checkall() {
      for (var i = 0; i < this.data.length; i++) {
        this.check(i);
      }
    },
    countadd(ind, id) {
      var cunhuo = this.data[ind].kucun - this.data[ind].yishou;
      if (this.count[id] < cunhuo) {
        this.count[id]++;
        var params = new URLSearchParams();
        params.append('count',JSON.stringify(this.count));
        params.append('uname',this.$root.token);
        params.append('act','add');
        this.$http({
            url:'http://localhost:4000/changecount',
            method:'post',
            data:params,
        }).then(res=>{
            console.log(res)
        })
      }else{
          alert('对不起，存货不足！')
      }
    },
    countodd(id) {
      if (this.count[id] > 0) {
        this.count[id]--;
        var params = new URLSearchParams();
        params.append('count',JSON.stringify(this.count));
        params.append('uname',this.$root.token);
        params.append('act','odd');
        this.$http({
            url:'http://localhost:4000/changecount',
            method:'post',
            data:params,
        }).then(res=>{
            console.log(res)
        })
      }
      
    }
  }
};
</script>

<style>
.shophead {
  color: #fff;
  background: #dd2727;
  font: 21px/50px "";
  text-align: center;
}
.pro-number.fr button {
  width: 24px;
  font: 700 20px/24px "";
  text-align: center;
  background: #ccc;
}
</style>
