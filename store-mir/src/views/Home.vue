<template>
  <b-container class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div>
      <h1 class="text-center my-3">Mis Productos</h1>
      <hr />
      <b-row>
        <b-col
          v-for="(item, index) in data"
          :key="index"
          cols="12"
          lg="4"
          md="6"
          sm="12"
        >
          <CardProduct :product="item" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";

export default {
  name: "Home",
  components: { CardProduct },
  data() {
    return {
      // data: [],
    };
  },
  mounted() {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   return this.$router.push("/login");
    // }
    this.getData();
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  methods: {
    async getData() {
      await this.$store.dispatch("getProducts");
    },
  },
};
</script>
