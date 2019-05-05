<template>
  <div class="header">
    <div class="wrapper">
      <div class="wrapper-left">
        <div class="title">首页</div>
        <span class="iconfont iconxiajiantou"></span>
      </div>
      <div class="wrapper-input">
        <input type="text" placeholder="搜索更新啦">
      </div>
      <div class="wrapper-right">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl';
@import '~stylus/mixin.styl'

.wrapper {
  display: flex;
  height: 1.2rem;
  background-color: bgColor;
  text-align: center;
  font-size: 0;
  color #fff
  border-1px(#eee)

  .wrapper-left {
    width: 1.36rem;
    line-height: 1.2rem;
    font-size: 0.36rem;
    color fontColor

    .title {
      display: inline-block;
      width: 0.8rem;
    }
  }

  .wrapper-input {
    flex: 1;
    line-height 1.2rem
    margin 0.15rem 0.18rem 0.15rem 0.16rem
    border 0.02rem solid #ccc
    border-radius 0.16rem
    background-color #fff
    color fontColor
    input{
      display block
      box-sizing border-box
      width 100%
      height 100%
      border-radius 0.16rem
      font-size .32rem
      padding-left 0.2rem
    }
  }

  .wrapper-right {
    width: 0.9rem;
    line-height: 1.2rem;
    font-size: 0.36rem;
    color fontColor
  }
}
</style>