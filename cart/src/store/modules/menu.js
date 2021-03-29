import * as menuService from "@/services/fetchMenu"

export const state={
    menus:[],
    menu:{}
}
export const mutations = {
    SET_MENUS(state, menus) {
        state.menus = menus
    },
    ADD_MENU(state, menu) {
        state.menus.push(menu)
    },
}
export const actions={
    async getMenus({commit}){
        menuService.getMenus().then(data=>{
            console.log(data+" "+data.menu);
            commit("SET_MENUS",  data.menu);//data["menu"]
            commit("SET_TOTAL",data.menus.length)
        }).catch(err=>console.log(err));

    },
    /*
    fetchMenu({ commit, rootState }, id) {
        // access getters
        var menu =rootState.menu.getMenuByID(id) // try to find this id (saves API call)
        if (menu) {
            // if found, set it
            commit('ADD_MENU', menu)
        } else {
          this.getMenus({commit});
        }
    },
    */
}
export const getters={
    menuLength: state=>{
        return state.menus.length
      },
    /*
     getMenuByID:state=>id=>{
        return state.menus.find(ele=>ele.id==id)
    },
    */

}

