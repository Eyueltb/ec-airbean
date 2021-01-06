<template>
  <div class="items">
    <ul>
      <a href="#"  @click="$emit('addNewItem')">
        <img src="@/assets/graphics/add.svg" alt="add" />
      </a>
      <p ref="d">{{ menu.title }}</p>
      <p>.......................</p>
      <p1>{{ menu.price }} kr</p1>
    </ul>
    <span>{{ menu.desc }}</span>
  </div>
</template>
<script>
export default {
  props: {
    menu: Object,
  },
};
</script>
<style lang="scss" >
.items{
  align-content: center;
  columns: 100%;
  row-gap: 0%;
  margin-inline-start: 0%;
}
ul {
  text-align: center;
  margin-top: 0px;
  position: relative;
  top: 15px;
}
ul p {
  display: inline;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: 2px;
  margin-left: 0%;
  margin-bottom: 100%
}
span {
  align-content: center;
  font-size: 10px;
  margin-left:0px;
  margin-top: 0px;
  d{

    position: absolute;
  }
}
img[alt="add"] {
  background-color: black;
  color-adjust: 10px;
  width: 20px;
  border-radius: 50%;
  padding: 8px;
  text-align: left;
  margin-right: 40px;
  margin-bottom: -10px;
  grid-auto-columns: 10%;
  position: relative;
  cursor: pointer;
}

</style>