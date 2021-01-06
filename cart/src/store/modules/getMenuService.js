import MenuService from '@/services/MenuService.js'
import Axios from 'axios'
import Modules from "../../../../../others/airbean/src/backend/utils/utils";
import Menu from "@/assets/data/menu.json";

// exporting as const allows private variables and methods

export const namespaced = true // ensures all mutations, actions and getters are namespaced under event.
const getMenuService = {
    state: {
        ActiveItemsId: 0,
        total: 0,
        menu:[],
        cart: [],
        showNav: false,
        showModal: false,
        orderNumber: "",
        orderETA: "",
        user:{
            id: '1',
            name: 'jons'
        },

    },
    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.loadingStatus = status
        },
        SET_MENU(state, menu) {
            state.menu.push(menu)
        },
        SET_TOTAL(state, total){
            state.total=total
        },
        showNav(state) {
            state.showNav = true;
        },
        hideNav(state) {
            state.showNav = false;
            state.hideHome = true;
        },
        showModal(state) {
            state.showModal = !state.showModal;
        },
        arrowUp(state, payload) {
            const addOne = state.cart.find((item) => item.id === payload);
            addOne.amount++;
            state.total = state.total + addOne.price;
        },
        arrowDown(state, payload) {
            const addOne = state.cart.find((item) => item.id === payload);
            if (addOne.amount > 1) {
                addOne.amount--;
                state.total = state.total - addOne.price;
            } else {
                state.cart = state.cart.filter((item) => item.id !== addOne.id);
                state.total = state.total - addOne.price;
            }
        },
        addToCart(state, payload) {
            let addItem = state.menu.filter((item) => item.id === payload);
            let amount = { amount: "" };
            let cartObject = { ...addItem[0], ...amount };

            if (state.cart.find((item) => item.id === cartObject.id)) {
                cartObject.amount += 1;
            } else {
                state.total = state.total + cartObject.price;
                state.cart.push(cartObject);
                cartObject.amount += 1;
            }
        },
        generateOrderNumber(state, payload) {
            state.orderNumber = payload;
        },
        generateETA(state, payload) {
            state.orderETA = payload;
        },
        cartTotal(state){
            state.cart.length;
        },
        cartTotalRemove(state){
            state.cart=null;
        }
    },
    actions:{
        showNav({ commit }) {
            commit("showNav");
        },
        hideNav({ commit }) {
            commit("hideNav");
        },
        showModal({ commit }) {
            commit("showModal");
        },
        addToCart(context, payload) {
            context.commit("addToCart", payload);
        },
        cartTotal(context) {
            context.commit("cartTotal");
        },
        cartTotalRemove(context) {
            context.commit("cartTotalRemove");
        },
        arrowDown(context, payload) {
            context.commit("arrowDown", payload);
        },
        async generateOrderNumber(context) {
            const orderNumber = await Modules.generateOrderNr();
            context.commit("generateOrderNumber", orderNumber);
        },
        async generateETA({ commit }) {
            const orderETA = await Modules.generateETA();
            commit("generateETA", orderETA);
        },
        async getMenuItems({ commit }) {
            const response = await fetch("http://localhost:5000/api/beans/");
            const data = await response.json();
            commit("SET_MENU", data.menu);
            commit("SET_TOTAL",data.menu.length)
        },
        //using axios
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
        async getMenu(context) {
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
export default getMenuService;

/*

export const state = {
    // data
    menusTotal: 0,
    menu:{},
    menus:[]
}
export const mutations = {
    // commit and track state changes, mutations update state
    // mutations are synchronous (the order of the code execution is the same as the order of the code written)
    // called with commit('name')
    SET_LOADING_STATUS(state, status) {
        state.loadingStatus = status
    },
    SET_TOTAL_MENUS(state, total) {
        state.menusTotal = total
    },
    SET_MENU(state, menu) {//set a single menu
        state.menu = menu
    },
    SET_MENU(state, menus) {
        state.menus = menus
    },
    ADD_MENU(state, menu) {
        state.menus.push(menu)
    }
}

export const actions = {
    // called from components, actions calling mutations to update state is best practice
    // actions are asynchronous(the order of the code execution may not exactly the same as the order of the code written)
    // called with dispatch('name')

     //using axios
    fetchMenus(context) {
        // take in context, contains all properties of vuex store
        context.commit('SET_LOADING_STATUS', 'loading')
        MenuService.getMenus() .then(resp => {
            console.log('getMenus() resp.data =>', resp.data) // shows data
            context.commit('SET_MENUS', resp.data) // commit mutation, with payload
        }).catch(error => {
            const notification = {
                type: 'error',
                message: 'There was a problem fetching events: ' + error.message
            }
            dispatch('notification/add', notification, { root: true })
            // dispatch the add action from notification module, root allows it to find the action from the root state
            // console.log('There was an error =>', error) // logs error (not great)
            console.log('getEvents() error.message =>', error.message) // logs error in details (good)
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
    //This is using fetch
    async getMenu(context) {
        const url = "http://localhost:5000/api/beans";
        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data) {
                    context.commit("SET_MENUS", data["menus"]); //or resp.data
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
}

export const getters = {
    // access state
    getMenuByID: state => id => {
        console.log('getters firing')
        // take in state then another function which takes in id
        return state.menus.find(menu => menu.id === id) // find id where the menu id === the id passed in
    },
    getMenus:state=>{
        console.log('getters firing')
        return state.menu.values();
    }
}
 */