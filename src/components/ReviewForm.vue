<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p></p>
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <input class="button" type="submit" value="Submit" @click="addReview" />
  </form>
</template>

<script>
export default {
  inject: ["GStore"],
  data() {
    return {
      name: "",
      review: "",
      patientID: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "") {
        alert("Review is incomplete. please fill out every field");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        patientID: this.GStore.patient.id,
      };
      this.$emit("review-submited", productReview);
      this.name = "";
      this.review = "";
    },
  },
};
</script>
