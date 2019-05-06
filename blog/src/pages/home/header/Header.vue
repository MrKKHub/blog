<template>
  <div class="header">
    <div class="wrapper border-1px">
      <div class="wrapper-left" @click="handleshow">
        <div class="title">首页</div>
        <span class="iconfont iconxiajiantou"></span>
      </div>
      <div class="wrapper-input">
        <input type="text" placeholder="搜索更新啦">
      </div>
      <div class="wrapper-right">登录</div>
    </div>
    <transition name="fade">
      <div class="list" v-show="flag">
        <ul>
          <li v-for="item of lists" :key="item.id" class="listitem">{{item}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      lists: ["首页", "沸点", "话题", "活动", "有奖征文"],
      flag: false
    };
  },
  methods: {
    handleshow() {
      console.log("1");
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl';
@import '~stylus/mixin.styl';

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .list {
    display: flex;
    width: 2rem;
    margin-left: 0.4rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0.15rem;

    ul {
      width: 100%;
      height: 100%;
      font-size: 0.32rem;

      li {
        flex: 1;
        text-align: center;
        margin: 0.4rem 0;
      }
    }
  }
}

.wrapper {
  display: flex;
  height: 1.2rem;
  background-color: bgColor;
  text-align: center;
  font-size: 0;
  color: #fff;
  border-1px(#eee);

  .wrapper-left {
    width: 1.36rem;
    line-height: 1.2rem;
    font-size: 0.36rem;
    color: fontColor;

    .title {
      display: inline-block;
      width: 0.8rem;
    }
  }

  .wrapper-input {
    flex: 1;
    line-height: 1.2rem;
    margin: 0.15rem 0.18rem 0.15rem 0.16rem;
    border: 0.02rem solid #ccc;
    border-radius: 0.16rem;
    background-color: #fff;
    color: fontColor;

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 0.16rem;
      font-size: 0.32rem;
      padding-left: 0.2rem;
    }
  }

  .wrapper-right {
    width: 0.9rem;
    line-height: 1.2rem;
    font-size: 0.36rem;
    color: fontColor;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity  0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>