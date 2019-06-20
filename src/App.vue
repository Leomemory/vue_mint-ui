<template>
  <div id="app">
    <router-view/>
     <mt-tabbar v-model="selected" :fixed="true" class="tabbar">
          <mt-tab-item id="mall" >
              主页
          </mt-tab-item>

          <mt-tab-item id="order" >
              订单
          </mt-tab-item>

          <mt-tab-item id="records">
              记录
          </mt-tab-item>

          <mt-tab-item id="contract" >
              合同
          </mt-tab-item>

          <mt-tab-item id="user" >
              用户
          </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:this.$route.name
    }
  },
  created(){
    console.log(this.selected)
  },
  watch:{
    $route(val){
      console.log(val)
      this.selected = val.name
    },
    selected:{
      handler(val){
        this.$router.push({name:val})
        console.log(val)
        this.selected = val
      }
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .tabbar .mint-tab-item .mint-tab-item-label{
    font-size: 16px;
  }
}
</style>
