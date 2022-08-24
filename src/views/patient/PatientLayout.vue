<template>
  <div v-if="GStore.patient">
    <div id="nav">
      <router-link :to="{ name: 'PatientDetail' }">Details</router-link>
      |
      <router-link :to="{ name: 'VaccineDetail' }">Vaccine</router-link>
      |
      <router-link :to="{ name: 'DoctorComment' }">Review</router-link>
    </div>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
  props: ["id"],
};
</script>
