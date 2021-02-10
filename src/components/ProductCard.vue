<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
    <div class="product-card">
      <h4>{{ name }}</h4>
      <img :src="image" />
      <p>£{{ price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { name: String, image: String, price: Number, product: Object },
};
</script>

<style scoped>
.product-card {
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  cursor: pointer;
  margin-bottom: 24px;
  padding: 20px;
  transition: all 0.2s linear;
}
img {
  width: 200px;
  height: 200px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
