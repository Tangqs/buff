<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{msg2}}</p>
    <button @click="goback()">返回</button>
    <input type="checkbox" v-model="checkAll" @change="changCheck()">
    <input type="checkbox" v-model="check1">
    <p>{{haha}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {  
  name: 'details2',
  data () {
    return {
      msg: '详情',
      msg2:'',
      check1:true,
      checkAll:false,
      haha:'我的',
    }
  },
  mounted(){
    this.msg2=this.$route.params.id;
    console.log(this.msg2);
    this.getList();
  },
  methods:{
    goback(){
      this.$router.push('/home');//返回
    },
    getList(){
      var self=this;
      axios({
        methods:"get",
        url:"../../static/FileName.json",
      }).then(function(res){
        console.log(res.data.errcod);
        self.haha=res.data.errcod;
      }).catch(function(){

      })
    },
    changCheck(){
      this.check1=this.checkAll;
    },
    // curChange(){
    //   this.checkAll=this.check1.every(function(item){return true});
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
