<template>
    <div class="dianji">
      <router-link to="/home" v-for="(list,i) in lists2" :key="i" :to="list.url">
        <span>{{list.name}}</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'bottom',
  data(){
    return {
      // lists:[
      //   {name:"home",url:"/home"},
      //   {name:"about",url:"/about"},
      //   {name:"us",url:"/us"},
      //   {name:"my",url:"/my"}
      // ]
    }
  },
  props:["lists2"]
}
</script>

<style scoped>

.linkActiveClass{
  color: red!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dianji{
  position: fixed;
  bottom: 0;
  background: #000;
  width: 100%;
  height: 10vw;
}
.dianji>span,.dianji>a{
  display: block;
  width: 25%;
  float: left;
  height: 10vw;
  color: #fff;
  text-align: center;
  line-height: 10vw;
}
</style>
