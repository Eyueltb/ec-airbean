<template>
  <div class="menu">
    <header class="headers">
      <div >
        <img id="imgHeader"
             src="@/assets/graphics/graphics-header.svg"
             alt="header" />
      </div>
      <div class="middle">
        <a
            href="#"
            class="a-tag d-flex flex-column text-decoration-none align-items-center"
            @click="$router.push({ path: '/nav' })"
        >
          <img src="@/assets/graphics/bag.svg" alt="burger" />
        </a>
      </div>
    </header>
         <ShoppingIcon
            @showAllorder="showAllorder"
            class="cartImage"></ShoppingIcon>

    <h1 class="ha par">Meny</h1>
    <p class="par" v-if="loading">Loading</p>

    <!-- <Myorder v-bind:visible="shownOrder"></Myorder>-->
    <MenuItems
        :menu="item" v-for="item in menuItems"
        :key="item.id"
        @addNewItem="addNewItem(item)">
      {{item.desc}}
    </MenuItems>
    <img class="foot"
         src="@/assets/graphics/graphics-footer.svg"
         alt="" />
  </div>
</template>
<script>
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
  async mounted() {
    await this.$store.dispatch("getMenu");
    this.loading = false;
  },
  data() {
    return {
      shownOrder: false,
      loading: true,
      //menu: this.$store.state.menu.menu
    };
  },
  computed: {
    menuItems() {
      return this.$store.state.menu.menu
    },
    methods: {

    },
    computed: {
      menu() {
        return this.$store.state.menu.menu
      },

      orderItems() {
        return this.$root.orderInfo;
      },
    },
  }
};
</script>
<style scoped >
.menu {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:  -8%;
  background-color: #f3e3e3;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.background {
  margin: 0;
  height: 100vh;
  margin-bottom: 0;

}
.headers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-size: 100%;
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
  width:90%;
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
.ha {
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
}
.par {
  margin-bottom: 0;
  padding-bottom: 0;
}
.foot {
  width: 100%;
  background-image: url("../assets/graphics/graphics-footer.svg");
  margin-bottom: 0;
  background-repeat: no-repeat;
  vertical-align: bottom;
  margin-top: 140px;
  background-size: contain;
}
</style>