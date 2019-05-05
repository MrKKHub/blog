<template>
    <div class="nav">
        <ul ref="len">
            <li v-for="(item,index) of lists" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeNav',
  data(){
      return{
          lists:['娱乐','电影','实时热点','电竞','技术','音乐','汽车','体育']
      }
  },
  mounted(){
      // 动态计算 ul的长度
      console.log(this.$refs.len.children)
    let liLength = this.$refs.len.children.length
    let ulLength = 0;
    for(var i = 0; i < liLength; i++){
        ulLength += this.$refs.len.children[i].offsetWidth
    }
    this.$refs.len.style.width = ulLength + 'px'

    let scroll = new this.BScroll('.nav',{
        scrollX:true,
        click:true
    })
  }
      
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl';
.nav{
    position relative
    width 100%
    height 0.92rem
    background-color bgColor
    text-align center
    ul{
        position absolute
        top 0
        left 0
        line-height 0.92rem
        text-align center
        li{
            display inline-block
            padding 0 0.4rem
        }
    }
}
</style>
