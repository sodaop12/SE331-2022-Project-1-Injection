<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <table>
      <tr>
        <th>ID</th>
        <th>Doctor name</th>
        <th>Review</th>
      </tr>
      <tr v-for="(review, index) in GStore.reviews" :key="index">
        <td>{{ review.patientId }}</td>
        <td>{{ review.name }}</td>
        <td>{{ review.review }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  props: ["id"],
};
</script>

<style scoped>
table,
th,
td {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
</style>
