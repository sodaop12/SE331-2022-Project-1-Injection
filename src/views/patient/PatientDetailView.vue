\
<template>
  <p>{{ patient.name }}</p>
  <p>{{ patient.surname }}</p>
  <p>{{ patient.homeTown }}</p>
  <p>{{ patient.age }}</p>
  <p>{{ patient.vaccinateStatus }}</p>
  <p>{{ patient.firstDose }}</p>
  <p>{{ patient.secondDose }}</p>
</template>

<script>
export default {
  props: ["patient"],
};
</script>
