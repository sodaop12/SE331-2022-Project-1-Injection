<template>
  <reviewlist v-if="GStore.reviews.length" :reviews="reviews"></reviewlist>
  <reviewform @review-submited="addReview"></reviewform>
</template>
<script>
import reviewform from "@/components/ReviewForm.vue";
import reviewlist from "@/components/ReviewList.vue";
import { computed } from "@vue/reactivity";

export default {
  props: ["id", "patient"],
  inject: ["GStore"],
  data() {
    return {
      activeClass: true,
    };
  },
  provide() {
    return {
      message: computed(() => this.reviews),
    };
  },
  components: {
    reviewform,
    reviewlist,
  },
  methods: {
    addReview(review) {
      this.GStore.reviews.push(review);
      this.GStore.flashMessage = "Your review have been submitted";
      setTimeout(() => {
        this.GStore.flashMessage = " ";
      }, 5000);

      this.$router.push({
        name: "DoctorComment",
        params: { id: this.patient.id },
      });
    },
  },
};
</script>
