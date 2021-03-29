import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Menu from './assets/data/menu.json'

Vue.config.productionTip = false

new Vue({
  /*
  data(){return{
    menu:Menu.menu,
    total:0,
    orderInfo:[]
  }},
   */
  router,
  store,
  render: h => h(App)
}).$mount('#app')
