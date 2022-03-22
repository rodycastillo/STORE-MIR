<template>
  <b-container>
    <div>
      <b-form class="">
        <h3 class="text-center">{{ this.$route.params.id }}</h3>
        <b-form-group label="Product Title">
          <b-form-input
            id="input-1"
            v-model="product.title"
            type="text"
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Product Category">
          <b-form-input
            id="input-1"
            v-model="product.category"
            disabled
            type="text"
            placeholder="Enter category"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Product Description">
          <b-form-input
            id="input-1"
            v-model="product.description"
            type="text"
            placeholder="Enter description"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Product Image">
          <b-form-input
            id="input-1"
            v-model="product.image"
            type="text"
            placeholder="Enter image"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Product Price">
          <b-form-input
            id="input-1"
            v-model="product.price"
            type="text"
            placeholder="Enter price"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Product Rate">
          <b-form-input
            id="input-1"
            v-model="product.rating.rate"
            type="text"
            placeholder="Enter price"
          ></b-form-input>
        </b-form-group>
        <b-progress
          :value="product.rating.rate"
          variant="warning"
          striped
          :max="5"
          class="mt-2"
        ></b-progress>
        <b-button
          variant="success"
          class="my-3 text-center"
          size="lg"
          @click="updateProduct(product)"
          >Update</b-button
        >
      </b-form>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductUpdate",
  // props: {
  //   product: {
  //     type: Object,
  //     default() {
  //       return {
  //         _id: "6238b96b05dd2eca66eea727",
  //         category: "electronics",
  //         description:
  //           "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster.",
  //         image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  //         price: 109,
  //         rating: {
  //           rate: 4.8,
  //           count: 319,
  //         },
  //         title:
  //           "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  //         createdAt: "2022-03-21T17:44:11.506Z",
  //         updatedAt: "2022-03-21T17:44:11.506Z",
  //         __v: 0,
  //       };
  //     },
  //   },
  // },
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.getById();
  },
  methods: {
    async getById() {
      const resp = await axios.get(
        `http://localhost:8080/api/products/${this.$route.params.id}`
      );
      this.product = resp.data.data;
    },
    async updateProduct(p) {
      console.log(p);
      const resp = await axios.post(
        `http://localhost:8080/api/products/update/${this.$route.params.id}`,
        p
      );
      console.log(resp);
    },
  },
};
</script>
