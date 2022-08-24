<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p></p>
    <h3>Leave a review</h3>
    <label for="patientId">ID:</label>
    <select id="patientId" v-model.number="patientId">
      <option>15</option>
      <option>14</option>
      <option>13</option>
      <option>12</option>
      <option>11</option>
      <option>10</option>
      <option>9</option>
      <option>8</option>
      <option>7</option>
      <option>6</option>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
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
      patientId: null,
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
        patientId: this.patientId,
      };
      this.$emit("review-submited", productReview);
      this.name = "";
      this.review = "";
      this.patientId = "";
    },
  },
};
</script>
