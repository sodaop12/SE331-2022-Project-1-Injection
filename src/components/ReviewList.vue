<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        doctor {{ review.name }} gave this review for this patient
        <br />
        "{{ review.review }}"
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>
