<template>
  <div class="menu">
    <header>
      <div class="background">
        <img id="imgHeader" src="@/assets/graphics/graphics-header.svg" alt="header" />
      </div>
      <div class="middle">
        <a
            href="#"
            class="a-tag d-flex flex-column text-decoration-none align-items-center"
            @click="$router.push({ path: '/nav' })"
        >
          <img src="@/assets/graphics/bag.svg" alt="burger" />
        </a>
        <h1>Meny</h1>
        <ShoppingIcon @showAllorder="showAllorder" class="cartImage"></ShoppingIcon>
      </div>
    </header>
    <MyOrder v-bind:visible="shownOrder"></MyOrder>
    <MenuItems
        :menu="item"
        v-for="item in menu.menu"
        :key="item.id"
        @addNewItem="addNewItem(item)">
    </MenuItems>
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>
<script>
import {mapState} from "vuex"
import ShoppingIcon from "@/components/ShoppingIcon.vue";
import MenuItems from "@/components/MenuItems.vue";
import MyOrder from "@/components/Myorder.vue";
export default {
  name: "Menu",
  components: {
    ShoppingIcon,
    MenuItems,
    MyOrder,
  },
  props: {},
  data() {
    return {
      shownOrder: false,
    };
  },
  created() {
    this.$store.dispatch("getMenuItems");
    this.loading = false;
  },
  methods: {
    addNewItem(prod) {
      let changing = this.menu.find(
          (changing) => changing.id === prod.id
      );
      let value = { value: "" };
      let cartItem = { ...changing, ...value };
      if (this.orderItems.find((element) => element.id === cartItem.id)) {
        cartItem.value += 1;
      } else {
        this.$root.total = this.$root.total + cartItem.price;
        this.$root.orderInfo.push(cartItem);
        cartItem.value++;
      }
    },
    showAllorder() {
      this.shownOrder = !this.shownOrder;
    },
  },
  //To map computed property to state
  computed: mapState({
    menu:'menu',
    cart:'cart',
    user:'user',
    order:'order'
  })
};
</script>
<style scoped>
.menu {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:  -8%;
}
.background {
  width: 1900px;
  height: 370px;
}
.cartImage{
  align-content: left;
  margin-right: 0%;
  margin-left: 80;
}
#imgHeader{
  width:100%;
  margin-top: 0%;
  margin-left: 0%;
}

h1{
  font-size: 2rem;
  margin-left: 5%;
  margin-top: 5%;
}

img[alt="burger"] {
  width: 50px;
  right: 50rem;
  bottom: 12rem;
  position: relative;
  cursor: pointer;

}
.info{
  display: block;
}

</style>