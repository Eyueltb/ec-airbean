<template>
  <div id="app">
    <Nav v-show="$store.state.showNav"> </Nav>

    <router-view v-show="!$store.state.showNav" />
  </div>

</template>

<script>
import Nav from "@/views/Nav";
export default {
  components: { Nav },
  data() {
    return {};
  },

};
</script>

<style lang="scss">
#app {
  font-family: "Times New Roman", Times, serif;
  min-height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>