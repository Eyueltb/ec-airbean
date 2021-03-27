export const namespaced = true // ensures all mutations, actions and getters are namespaced under event.
const manageView = {
    state: {
        showNav: false,
        showModal: false,
    },
    mutations: {
         SET_LOADING_STATUS(state, status) {
           state.loadingStatus = status
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
    },
};
export default manageView;