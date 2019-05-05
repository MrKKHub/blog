<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
  </div>
</template>

<script>
import HomeHeader from "./header/Header.vue";
import HomeNav from "./nav/Nav.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeNav
  }
};
</script>

<style lang="stylus" scoped>

</style>
