import { mapActions } from 'vuex';
<template>
  <div>
    <b-card
      :title="product.title"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-3 text-center mx-auto"
    >
      <p class="card-currency">{{ formatCurrency(product.price) }}</p>
      <b-card-text>
        {{ product.description }}
      </b-card-text>

      <b-button
        @click="$bvModal.show(`ModalProduct${product._id}`)"
        variant="dark"
        >Agregar</b-button
      >
    </b-card>
    <modal-product :item="product" />
  </div>
</template>

<script>
import ModalProduct from "./ModalProduct.vue";
import FormatCurrency from "@/mixins/FormatCurrency";
export default {
  components: { ModalProduct },
  name: "CardProduct",
  mixins: [FormatCurrency],
  props: {
    product: {
      type: Object,
      default() {
        return {
          title: "Zapatillas Nike",
          description:
            "Some quick example text to build on the card title and make up the bulk of the cards content.",
          image: "https://picsum.photos/600/300/?image=29",
          price: 109.95,
        };
      },
    },
  },
  methods: {
    // formatCurrency(n) {
    //   const int = parseFloat(n);
    //   const formatte = new Intl.NumberFormat("es-PE", {
    //     style: "currency",
    //     currency: "PEN",
    //   });
    //   return formatte.format(int);
    // },
    addProduct({ category, description, image, price, rating, title }) {
      const data = { category, description, image, price, rating, title };
      this.$store.dispatch("addProduct", data);
    },
  },
};
</script>
<style lang="less" scoped>
.card {
  border: 0;
  border: 1px solid #e3e3e3;
  border-radius: 2rem;
  // max-height: 30rem;
  // overflow: hidden;

  .card-img-top {
    border-radius: 2rem 2rem 0 0;
    max-height: 15rem;
    padding: 2rem;
  }
  .card-body {
    position: relative;
    .card-currency {
      background-color: #212529;
      color: white;
      width: 100px;
      margin-left: auto;
      margin-bottom: 0;
      border-radius: 0.5rem;
      position: absolute;
      right: 1rem;
    }
    .card-text {
      overflow-y: scroll;
      scroll-behavior: smooth;
      margin-top: 3rem;
    }
  }
}
</style>
