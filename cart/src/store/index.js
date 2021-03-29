import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'; //importing all public items
import * as menu from '@/store/modules/menu';
import manageOrder from "@/store/modules/manageOrder";
import manageView from "@/store/modules/manageView";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  },
  mutations: {  },
  actions: { },
  modules: {
    menu,
    cart:manageOrder,
    user,
    order:manageView,
  }
})
