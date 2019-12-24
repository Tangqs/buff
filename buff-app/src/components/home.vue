<template>
  <div class="hello">
    <h1 style="color:#fff" :style="{background:background}">{{ msg }}</h1>

    <!-- 轮播 -->
    <img v-for="(img,i) in imgs" :src="img" alt="" v-show="n==i">
    <p>
        <span v-for="(img,i) in imgs" :key="i" :class="i==n ? 'spanA':''">
          {{i+1}}
        </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      n:0,
      msg: '首页',
      background:'green',
      imgs:[require("@/assets/img/banner1.png"),
            require("@/assets/img/banner2.png"),
            require("@/assets/img/banner3.png")],
      timer:null,
    }
  },
  methods:{
    play(){
      this.timer=setInterval(this.lunbo,1000)
    },
    lunbo(){
      this.n++;
      if(this.n == this.imgs.length){
        this.n=0;
      }
    }

  },
  mounted(){//生命周期 挂载完
    this.play();
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
