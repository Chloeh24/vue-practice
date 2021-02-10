<template>
  <div>
    <h2>Your Cart</h2>
    <div v-for="item in cart" :key="item.id">
      <p>{{ item.name }}</p>
      <img :src="item.image" width="100px" height="100px" alt="" />
      <button @click="DeleteItem(item.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  methods: {
    DeleteItem(id) {
      this.$emit("delete-item", id);
    },
  },
};
</script>

<style></style>
