<template>
  <router-link
    class="patient-link"
    :to="{
      name: 'PatientDetail',
      params: { id: patient.id },
    }"
  >
    <div class="patient-card">
      <h1>{{ patient.name }} {{ patient.surname }}</h1>
      <p>Age: {{ patient.age }}</p>
      <p>Vaccinate Status {{ patient.vaccinateStatus }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "PatientCard",
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.patient-card {
  padding: 20px;
  width: 600px;
  cursor: pointer;
  border-radius: 25px;
  border: 4px solid #68b856;
  margin-bottom: 18px;
  background-color: rgba(184, 221, 35, 0.731);
  border-style: outset;
}

.patient-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.patient-link {
  color: #036036;
  text-decoration: none;
}
</style>
