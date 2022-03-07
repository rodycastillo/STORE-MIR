<template>
  <div>
    <b-card
      :title="product.title"
      :img-src="product.img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2 text-center"
    >
      <b-card-text>
        {{ product.description }}
      </b-card-text>

      <b-button variant="dark">Actualizar</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      default() {
        return {
          title: "Zapatillas Nike",
          description:
            "Some quick example text to build on the card title and make up the bulk of the cards content.",
          img: "https://picsum.photos/600/300/?image=29",
        };
      },
    },
  },
};
</script>
<style lang="less" scoped>
.card {
  border: 0;
  border: 1px solid #e3e3e3;
  border-radius: 2rem;
  .card-img-top {
    border-radius: 2rem 2rem 0 0;
  }
}
</style>
