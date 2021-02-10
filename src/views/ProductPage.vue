<template>
  <div class="page">
    <h2>{{ product.name }}</h2>
    <div class="product-info">
      <img width="200px" height="200px" :src="product.image" />
      <div class="product-details">
        <p v-if="product.inStock > 0">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>£{{ product.price }}</p>
        <ul>
          <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
        </ul>
        <div
          class="color-box"
          v-show="product.colors.length > 1"
          v-for="(color, index) in product.colors"
          :key="index"
          :style="{ backgroundColor: color.colorName }"
          @mouseover="updateImage(color.image)"
        ></div>
        <button @click="AddtoCart">Add to Cart</button>
        <button @click="DeleteItem">Remove Item</button>
      </div>
    </div>
    <div class="review">
      <form class="review-form" @submit.prevent="onSubmit">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="review.name" />
        <label for="rating">Rating</label>
        <select name="rating" id="rating" v-model="review.rating"
          ><option value="5">5</option
          ><option value="4">4</option
          ><option value="3">3</option
          ><option value="2">2</option
          ><option value="1">1</option>
        </select>
        <label for="review">Please write a review:</label>
        <textarea
          name="review"
          id="review"
          cols="30"
          rows="10"
          v-model="review.review"
        ></textarea>
        <button type="submit">Add Review</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getProduct } from "@/utils/getData.js";

export default {
  props: ["id"],
  data() {
    return {
      product: {},
      review: {
        name: "",
        rating: null,
        review: "",
      },
    };
  },
  created() {
    getProduct(this.id)
      .then((res) => (this.product = res.data))
      .catch((err) => console.log(err));
  },
  methods: {
    AddtoCart() {
      this.$emit("add-to-cart", this.product);
    },
    DeleteItem() {
      this.$emit("delete-item", this.product.id);
    },
    updateImage(image) {
      this.product.image = image;
    },
    onSubmit() {
      let productReview = {
        productid: this.product.id,
        name: this.review.name,
        rating: this.review.rating,
        review: this.review.review,
      };

      this.$emit("submit-review", productReview);
      this.review.name = "";
      this.review.rating = null;
      this.review.review = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-info {
  align-items: center;
  display: flex;
  justify-content: center;
}

.product-details {
  padding-left: 5rem;
}

.review {
  margin-top: 40px;
}

.review-form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40%;
}
a {
  color: #42b983;
}
.color-box {
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>
