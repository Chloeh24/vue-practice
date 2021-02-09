<template>
  <div id="nav">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'shopping-cart' }">Shopping Cart</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  margin-top: 20px;
  text-align: center;
}
</style>
