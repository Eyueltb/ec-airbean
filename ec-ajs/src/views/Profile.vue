<template>
  <div id="all">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      <a @click="$router.push({ path: '/nav' })">
        <img src="@/assets/graphics/bag.svg" alt="box" />
      </a>
    </header>
    <section>
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <h1>Sixten Kaffelover</h1>
      <span id="pro">sixten.kaffelover@zocom.se</span>
      <h2>Orderhistorik</h2>
    </section>
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>

<script>
export default {
  name: "Profile.vue"
};
</script>

<style scoped>
img[alt="profile"] {
  margin: 30px;
  width: 90px;
}
img[alt="box"] {
  width: 75px;
  right: 46rem;
  bottom: 30rem;
  position: relative;
  cursor: pointer;
}
#pro {margin-right: 0%;
}
section h2{
  text-align: center;
}
</style>