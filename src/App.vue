<template>
  <div id="app">
    <NavBar />
    <div>
      <p>Shopping Cart ({{ cart }})</p>
    </div>
    <router-view
      @submit-review="addReview"
      @add-to-cart="updateCart"
      @delete-item="deleteItem"
    /></div
></template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  computed: {
    cart() {
      return this.$store.state.cart ? this.$store.state.cart.length : 0;
    },
  },
  components: {
    NavBar,
  },
  methods: {
    updateCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteFromCart", id);
    },
    addReview(review) {
      this.$store
        .dispatch("addReview", review)
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
