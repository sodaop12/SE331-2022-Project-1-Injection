<template>
  <p>{{ patient.name }} {{ patient.surname }}</p>
  <p>Address: {{ patient.homeTown }}</p>
  <p>Age: {{ patient.age }}</p>
  <p>Number of dose: {{ patient.vaccinateStatus }}</p>
</template>
<script>
export default {
  props: ["patient"],
};
</script>
