<template>
  <div>
    <h1>Welcome to the Avo Shop!</h1>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { getProducts } from "@/utils/getData.js";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    getProducts()
      .then((res) => (this.products = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  text-align: center;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;
  width: 80%;
}
</style>
