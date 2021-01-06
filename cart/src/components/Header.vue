<template>
  <div >
    <header>
      <span> <img src=""/> </span>
      <Nav />
    </header>
  </div>
</template>

<script>
import Nav from "@/views/Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: cover;
}
</style>