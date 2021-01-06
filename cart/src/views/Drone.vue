<template>
  <div class="waitting">
    <div>
      <p class="order-number">Order number {{orderNumber}}</p>
      <img src="@/assets/graphics/drone.svg" alt="drone" />
    </div>
    <div class="order">
      <h1>Din beställning</h1>
      <h1>är på väg!</h1>
      <p class="minutes">{{e}} minuter</p>
    </div>

    <a  class="cool-btn"
        v-on:click="$router.push({ path: '/' })">
      <button>OK, cool!</button> </a>

  </div>
</template>

<script>
import { generateOrderNr, generateETA } from "../backend/utils/utils.js";
export default {
  data() {
    return {
      e: 0,
      orderNumber:""
    };
  },
  methods: {
    getData() {
      this.orderNumber = generateOrderNr();
      this.e = generateETA();
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>

<style scoped>

.waitting{
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  height: 100vh;
  background-image: url("../assets/graphics/drone.svg");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50% 20%;

  background-color: #e5674e;

  display: flex;
  flex-direction: column;

  padding-left: 8%;
  padding-right: 8%;
  align-content: center;
  text-align: center;
}
.order-number {
  margin-top: 90px;
  color: #fdfdfd9d;
  font-size: 20px;
  margin-bottom: 110%;
}
.order-status h1 {
  font-weight: 600;
  font-size: 45px;
  color: #fafafafb;
}
.minutes {
  margin-top: 40px;
  color: #fafafafb;
  font-size: 30px;
  margin-bottom: 130px;
}
.cool-btn {
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  height: 80px;
  font-size: 35px;
  font-weight: 700;
  padding-top: 25px;
  border-radius: 50px 50px;
  border: none;

  text-decoration: none;
  background-color: #fafafafb;
  color: #2c2c24;
  margin-bottom: 0;
}

img[alt="drone"] {
  margin: 2rem;
}

</style>