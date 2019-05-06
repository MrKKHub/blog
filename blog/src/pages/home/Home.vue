<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
    <home-body class="homeBody"></home-body>
  </div>
</template>

<script>
import HomeHeader from "./header/Header.vue";
import HomeNav from "./nav/Nav.vue";
import HomeBody from "./body/Body.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeNav,
    HomeBody
  }
};
</script>

<style lang="stylus" scoped>
.home{
  padding-top 2.22rem  
  padding-bottom 1rem
  position relative
}
.homeBody{
  position fixed
  top 2.22rem
  left 0
  right 0
  bottom 1rem
}
</style>
