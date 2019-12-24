<template>
  <div id="app">
    <h1>似乎懂了</h1>
    <!--路由动态展示-->
    <router-view/>
    <bottom :lists2="lists2" />
  </div>
</template>

<script>
import bottom from "./components/bottom.vue"
export default {
  name: 'App',
  data(){
    return {
        lists2:[
          {name:"home2",url:"/home"},
          {name:"about2",url:"/about"},
          {name:"us2",url:"/us"},
          {name:"my2",url:"/my"}
        ]
      }
  },
  components:{
    bottom
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>

