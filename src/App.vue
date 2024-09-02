<template>
  <div class="app">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from "./UI/MyNavbar.vue";

export default { components: { MyNavbar } };
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
