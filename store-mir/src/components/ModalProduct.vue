<template>
  <b-modal
    :id="`ModalProduct${item._id}`"
    class="ModalProduct"
    hide-footer
    hide-header
    centered
  >
    <div class="ModalProduct__body">
      <h4 class="ModalProduct__body-title text-center">{{ item.title }}</h4>
    </div>
    <b-img
      :src="item.image"
      :thumbnail="true"
      center
      fluid
      rounded="circle"
      style="max-height: 10rem"
    ></b-img>
    <b-row>
      <b-col class="d-flex justify-content-center align-items-center">
        <StarRating
          :animated="true"
          v-model="item.rating.rate"
          :star-size="35"
        />
      </b-col>
      <b-col class="text-center">
        <p class="text-center py-3 mb-0">{{ formatCurrency(item.price) }}</p>
      </b-col>
    </b-row>
    <b-row class="ModalProduct__send text-center my-3">
      <b-col>
        <b-button
          type="submit"
          pill
          variant="warning"
          @click="toUpdate(item._id)"
          class="ModalProduct__send-button px-4 text-white mr-1"
          >Actualizar</b-button
        >
      </b-col>
      <b-col>
        <b-button
          type="submit"
          pill
          variant="warning"
          @click="closeModal(item._id)"
          class="ml-1 ModalProduct__send-button px-4 text-white"
          >Close</b-button
        >
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import FormatCurrency from "@/mixins/FormatCurrency";
import StarRating from "vue-star-rating";
export default {
  name: "ModalProduct",
  mixins: [FormatCurrency],
  components: {
    StarRating,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "This is my title",
          id: 1,
        };
      },
    },
  },
  methods: {
    closeModal(id) {
      return this.$bvModal.hide(`ModalProduct${id}`);
    },
    toUpdate(id) {
      this.$router.push({
        name: "ProductUpdate",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="css">
.ModalProduct {
  text-align: center;
}
</style>
