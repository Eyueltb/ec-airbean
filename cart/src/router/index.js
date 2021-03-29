import Vue from "vue";
import VueRouter from "vue-router";
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Drone from '../views/Drone.vue'
import Profile from '../views/Profile.vue'
import  Menu from '../views/Menu.vue'
import  Nav from '../views/Nav.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing

  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav

  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/drone',
    name: 'Drone',
    component: Drone

  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile

  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu

  }

];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;