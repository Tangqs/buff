<template>
  <div class="hello">
    <h1 style="color:#fff" :style="{background:background}">{{ msg }}</h1>

    <!-- 轮播 -->
    <img v-for="(img,i) in imgs" :src="img" alt="" v-show="n==i">
    <p>
        <span v-for="(img,i) in imgs" :class="i==n ? 'spanA':''">
          <router-link :to="'/details/'+i">
            <span>
              {{i+1}}
            </span>
          </router-link>
        </span>
    </p>

    <p v-for="(list,i) in lists">
        {{list}}
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      n:0,
      msg: '首页',
      lists:[],
      background:'green',
      imgs:[require("@/assets/img/banner1.png"),
            require("@/assets/img/banner2.png"),
            require("@/assets/img/banner3.png")],
      timer:null,
    }
  },
  methods:{ //方法
    play(){
      this.timer=setInterval(this.lunbo,1000)
    },
    lunbo(){
      this.n++;
      if(this.n == this.imgs.length){
        this.n=0;
      }
    },
    getList(){
      axios.get("../../static/FileName.json").then(res=>{//res为后端的展示
        console.log(res);
        this.lists=res.data.activityDtlDto;
        console.log(this.lists)
      }).catch(error=>{

      })
    }

  },
  mounted(){//生命周期 挂载完
    this.play();
    this.getList();
  },
  destroyed(){ //生命周期 销毁
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.spanA{
  color: red;
}
</style>
