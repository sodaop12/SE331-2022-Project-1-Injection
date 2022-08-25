<template>
  <h1>List of patient</h1>
  <div class="patient">
    <PatientCard
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></PatientCard>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PatientList', query: { limit: limit, page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'PatientList', query: { limit: limit, page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientCard from "@/components/PatientCard.vue";
import PatientService from "@/services/PatientService.js";
export default {
  name: "PatientListView",
  props: {
    page: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },
  components: {
    PatientCard,
  },
  data() {
    return {
      patients: null,
      totalPats: 0, // <--- Added this to store totalEvents
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    PatientService.getPatients(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data;
          comp.totalPats = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PatientService.getPatients(this.limit, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data;
        this.totalPats = response.headers["x-total-count"];
        next();
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  computed: {
    hasNextPage() {
      //First, calculate total pages
      let totalPages = Math.ceil(this.totalPats / this.limit);

      //Then check to see if the current page  is less than the total pages.
      return this.page < totalPages;
    },
  },
};
</script>
<style scoped>
.patient {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #aeff00;
  border-radius: 25px;
  background-color: rgb(59, 186, 116);
  border-style: outset;
  text-align: center;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
