<template>
  <div v-if="patient">
    <h1>{{ patient.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'PatientDetail' }">Details</router-link>
      |
      <router-link :to="{ name: 'VaccineDetail' }">Vaccine</router-link>
    </div>
    <router-view :patient="patient" />
  </div>
</template>
<script>
import patientService from "@/services/PatientService.js";
export default {
  props: ["id"],
  data() {
    return {
      patient: null,
    };
  },
  created() {
    patientService
      .getPatient(this.id)
      .then((response) => {
        this.patient = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "Patient" },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>
