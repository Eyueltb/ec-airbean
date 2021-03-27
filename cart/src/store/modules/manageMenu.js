import MenuService from '@/services/MenuService.js'
import Axios from 'axios'
import Modules from "../../../../../others/airbean/src/backend/utils/utils";
import Menu from "@/assets/data/menu.json";

// exporting as const allows private variables and methods

export const namespaced = true // ensures all mutations, actions and getters are namespaced under event.
const manageMenu = {
    state: {
        //ActiveItemsId: 0,
        menu:[ ],
    },
    mutations: {
       SET_MENUS(state, menu) {
            state.menu=menu
        },
        SET_MENU(state, menu) {
            state.menu.push(menu)
        },
    },
    actions:{
        async getMenuItems({ commit }) {
            const response = await fetch("http://localhost:5000/api/beans/");
            const data = await response.json();
            console.log(data+" "+data.menu);
            commit("SET_MENUS",  data.menu);//data["menu"]
            commit("SET_TOTAL",data.menu.length)
        },
        //using axios-fetchMenus
        fetchMenus(context) {
            // take in context, contains all properties of vuex store
            context.commit('SET_LOADING_STATUS', 'loading')
            MenuService.getMenus() .then(resp => {
                context.commit("SET_MENU", resp.data.menu);
                console.log(resp.data.menu);
            }).catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + error.message
                }
                console.log('getMenus() error.message =>', error.message) // logs error in details (good)
            })
        },
        // Fetch a single menu
        fetchMenu({ commit, getters, dispatch }, id) {
            // access getters
            var menu = getters.getMenuByID(id) // try to find this id (saves API call)
            if (menu) {
                // if found, set it
                commit('SET_MENU', menu)
            } else {
                // else go find it
                MenuService.getMenu(id) // call getMenu, pass in id
                    .then(resp => {
                        console.log('getEvent() resp.data =>', resp.data)
                        commit('SET_MENU', resp.data) // set menu to data
                    })
                    .catch(error => {
                        const notification = {
                            type: 'error',
                            message: 'There was a problem fetching event: ' + error.message
                        }
                        dispatch('notification/add', notification, { root: true })
                        // dispatch the add action from notification module, root allows it to find the action from the root state
                        console.log('getMenu() error.resp =>', error.resp)
                    })
            }
        },
        //This is using fetch with exception
        async getMenus(context) {
            const url = "http://localhost:5000/api/beans";
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data) {
                        context.commit("SET_MENU",data ); //or resp.data //data["menus"]
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });

        }
    }
}
export default manageMenu;

