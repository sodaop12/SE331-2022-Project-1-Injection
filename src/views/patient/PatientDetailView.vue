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
  inject: ["GStore"],
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
      this.GStore.flashMessage =
        "Your review have been submitted to " +
        this.patient.name +
        " " +
        this.patient.surname;
      setTimeout(() => {
        this.GStore.flashMessage = " ";
      }, 5000);

      this.$router.push({
        name: "PatientDetail",
        params: { id: this.patient.id },
      });
    },
  },
};
</script>
