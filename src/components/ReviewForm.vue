<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p></p>
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      review: "",
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
      };
      this.$emit("review-submited", productReview);
      this.name = "";
      this.review = "";
    },
  },
};
</script>
