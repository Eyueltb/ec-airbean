<template>
  <div class="all">
    <div class="info">
      <div>
        <div class="name">{{ thing.title }}</div>
        <span class="line">.................</span>
        <div class="price">{{ thing.value * thing.price }} kr</div>
      </div>
      <div class="modify">
        <a  @click="$emit('increase', thing.id)">
          <img src="@/assets/graphics/arrow-up.svg" alt="up" />
        </a>
        <div >{{ thing.value }}</div>
        <a  @click="$emit('minimize', thing.id)">
          <img src="@/assets/graphics/arrow-down.svg" alt="down" />
        </a>
      </div>
      <a  @click="$emit('delete', thing.id)">
        <img src="@/assets/graphics/close.svg" alt="close"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thing: Object,
  },
};
</script>

<style scoped>
.all{width: 100%;
  height: 300px;

}

.info{
  margin: 20px;

}
.name{
  font-size: 18px;
  font-weight: bold;
  margin-left: -70%;
  margin-top: 5%;
}
.price {
  text-align: left;
  font-size: 15px;
  margin-left: 48%;
  margin-top: -8%;
  padding-top: 0%;
}
.line{
  opacity: 0.5;
  margin-left: -25%;
  margin-top: 70%;

}

img[alt="up"] {
  height: 10px;
}
img[alt="down"] {
  height: 10px;

}
img[alt="close"] {
  height: 10px;
  margin: 15px;
  margin-top: 12x;
  cursor: pointer;
  margin-left: 40%;
}
.modify {
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  cursor: pointer;
  font-size: 1rem;
  height: 8px;
  margin-top: -7%;
}

</style>
