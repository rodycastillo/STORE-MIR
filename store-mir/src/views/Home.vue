<template>
  <b-container class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div>
      <h1 class="text-center my-3">Mis Productos</h1>
      <hr />
      <CardProduct />
    </div>
  </b-container>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Home",
  components: { CardProduct },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      return this.$router.push("/login");
    }
  },
};
</script>
