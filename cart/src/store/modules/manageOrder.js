export const namespaced = true // ensures all mutations, actions and getters are namespaced under event.
const manageOrder = {
    state: {
        cart: [],
        order:[],
        orderNumber: "",
        orderETA: "",
        total: 0,
        created:"",
        userUuid: "",


    },
    mutations: {
        SET_TOTAL(state, total){
            state.total=total
        },
        ADD_CART(state, item){
            state.cart.push(item);
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
        addToCart({state} , payload) {
            //rootState
            let addItem=state.menus.filter((item) => item.id === payload)
            let amount = { amount: "" };
            let cartObject = { ...addItem[0], ...amount };
            console.log(addItem +" "+ cartObject);
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
        addToCart({commit}, payload) {

           commit("addToCart", payload);
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
        /*
        async generateOrderNumber(context) {
            const orderNumber = await Modules.generateOrderNr();
            context.commit("generateOrderNumber", orderNumber);
        },
        async generateETA({ commit }) {
            const orderETA = await Modules.generateETA();
            commit("generateETA", orderETA);
        },
        */
    },
    getters:{
        cartLength: state=>{
            return state.cart.length
        }
    }
};
export default manageOrder;