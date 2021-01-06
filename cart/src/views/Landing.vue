<template>
  <div @click="goToMenu" class="landing">
    <section class="content">
      <img src="@/assets/graphics/airbean-landing.svg" alt="Welcome to Air Bean" class="img" />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push("/menu");
    }
  }
};
</script>

<style lang="scss" scoped>

.landing {
  background: #38846D;
  cursor: pointer;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66.7rem;
  background: url("../assets/graphics/intro-graphic-left.svg") left no-repeat,
  url("../assets/graphics/intro-graphic-right.svg") right no-repeat;
}
</style>