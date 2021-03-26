import MenuService from '@/services/MenuService.js'

export const namespaced = true // ensures all mutations, actions and getters are namespaced under event.
const getMenuService = {
    state: {
        total: 0,
        menu:[],
        cart: [],
        showNav: false,
        showModal: false,
        orderNumber: "",
        orderETA: "",
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

        },
        //using axios to fetch data fro
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
    }
}
export default getMenuService;