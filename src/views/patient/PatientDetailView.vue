<template>
  <p>{{ patient.name }} {{ patient.surname }}</p>
  <p>Address: {{ patient.homeTown }}</p>
  <p>Age: {{ patient.age }}</p>
  <p>Number of dose: {{ patient.vaccinateStatus }}</p>
  <reviewlist v-if="reviews.length" :reviews="reviews"></reviewlist>
  <reviewform @review-submited="addReview"></reviewform>
</template>

<script>
import reviewform from "@/components/ReviewForm.vue";
import reviewlist from "@/components/ReviewList.vue";
export default {
  props: ["patient"],
  data() {
    return {
      reviews: [],
      activeClass: true,
    };
  },
  components: {
    reviewform,
    reviewlist,
  },
  methods: {
    addReview(review) {
      this.reviews.push(review);
    },
  },
};
</script>
