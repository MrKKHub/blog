<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <router-view/>
    
    <tarbar></tarbar>
  </div>
</template>

<script>
import Tarbar from '@/components/tarbar.vue'
export default {
  name: 'App',
  components:{
    Tarbar
  }
}
</script>

<style>
html{
  background-color: #eee;
  font-family: "-apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei",Arial,sans-serif;
}
</style>
