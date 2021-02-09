<template>
  <div class="page">
    <h2>{{ item }}</h2>
    <img width="400px" height="500px" :src="image" />
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>

    <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
    <div
      class="color-box"
      v-for="(color, index) in colors"
      :key="index"
      :style="{ backgroundColor: color.colorName }"
      @mouseover="updateImage(color.image)"
    ></div>
    <select name="size" id="size"></select>
    <button @click="AddtoCart">Add to Cart</button>
    <button @click="DeleteItem">Remove Item</button>
    <div>
      <p>Shopping Cart ({{ cart }})</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    AddtoCart() {
      this.cart += 1;
    },
    DeleteItem() {
      if (this.cart !== 0) this.cart -= 1;
    },
    updateImage(image) {
      this.image = image;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  color: #42b983;
}
.color-box {
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>
