import Vue from "vue";
import VueRouter from "vue-router";
import ProductPage from "@/views/ProductPage.vue";
import Home from "@/views/Home.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";

Vue.use(VueRouter);

export default new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductPage,
      props: true,
    },
    {
      path: "/cart",
      name: "shopping-cart",
      component: ShoppingCart,
    },
  ],
});
