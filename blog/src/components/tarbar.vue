<template>
    <div class="tarbar">
        <div class="home iconfont iconshouye">
            <span>首页</span>
        </div>
        <div class="info iconfont iconxiaoxi">
            <span>消息</span>
        </div>
        <div class="vip iconfont iconcrown-fill">
            <span>会员</span>
        </div>
        <div class="person iconfont iconwodedamaijihuo">
            <span>我的</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Tarbar'
    
}
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';
.tarbar{
    display flex
    position fixed
    bottom 0    
    width 100%
    height 1rem
    border-top 1px solid #eee
    background-color #fff
    .home,.info,.vip,.person{
        display flex
        flex-direction column
        flex 1
        text-align center
        font-size 0.56rem
        margin-top .1rem
        span{
            margin-top 0.1rem
            font-size 0.2rem
        }
    }
}  

</style>