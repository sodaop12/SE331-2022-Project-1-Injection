<template>
  <table>
    <tr>
      <th>Date</th>
      <th>Vaccine</th>
    </tr>
    <tr>
      <td>{{ patient.firstDate }}</td>
      <td>{{ patient.firstDose }}</td>
    </tr>
    <div v-if="patient.secondDose !== '-'">
      <td>{{ patient.secondDate }}</td>
      <td>{{ patient.secondDose }}</td>
    </div>
  </table>
</template>

<script>
export default {
  props: ["patient"],
};
</script>

<style scoped>
table,
th,
td {
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(255, 159, 207);
  border-radius: 6px;
}
div {
  display: table-row;
}
</style>
