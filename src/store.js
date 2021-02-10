import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
    DELETE_ITEM(state, id) {
      state.cart.map((x) => {
        if (x.id === id) {
          return state.cart.splice(state.cart.indexOf(x), 1);
        }
      });
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    deleteFromCart({ commit }, id) {
      commit("DELETE_ITEM", id);
    },
  },
});
