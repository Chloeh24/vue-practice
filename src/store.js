import Vue from "vue";
import Vuex from "vuex";
import { postReview } from "@/utils/getData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    reviews: [],
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
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    deleteFromCart({ commit }, id) {
      commit("DELETE_ITEM", id);
    },
    addReview({ commit }, review) {
      return postReview(review.productid, review).then((res) => {
        console.log(res.data);
        commit("ADD_REVIEW", review);
      });
    },
  },
});
