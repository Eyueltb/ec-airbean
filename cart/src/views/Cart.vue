<template>
  <div class="modal ">
    <h1>Din beställning</h1>
    <OrderItems v-for="item in cart" :key="item.id" :item="item"></OrderItems>
    <div class="modal-footer">
      <div>
        <h2>Total</h2>
        <p>inkl moms + drönarleverans</p>
      </div>
      <h2>{{ $store.state.total }} kr</h2>
    </div>
    <router-link
        to="/order-status"
        class="tmm-btn"
        @click.native="$store.dispatch('generateOrderInfo')"
    >
      Take My Money
    </router-link>
  </div>
</template>

<script>
import OrderItem from "@/components/OrderItems";
export default {
  components: { OrderItem },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style>
.modal {
  background-color: #fdfffd;
  position: fixed;
  width: 21rem;
  top: 10%;
  bottom: auto;
  left: 27%;
  right: auto;
  padding: 10px;
  border-radius: 5%;
  padding-bottom: 30px;
  opacity: 1;
  min-height: 700px;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
}
.modal-footer div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
.modal-footer div h2,
.modal-footer h2 {
  font-size: 30px;
  font-weight: bold;
}
.tmm-btn {
  margin-top: 10px;

  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;

  border-radius: 50px 50px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background-color: #2c2c24;
  color: #fdfdfd;
  text-decoration: none;
  justify-content: space-around;
}
</style>
