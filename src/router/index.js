import { createRouter, createWebHistory } from "vue-router";
import PatientListView from "../views/PatientListView.vue";
import PatientLayout from "../views/patient/PatientLayout.vue";
import PatientDetail from "../views/patient/PatientDetailView.vue";
import VaccineDetail from "../views/patient/VaccineDetailView.vue";
import DoctorComment from "../views/patient/DoctorReviewView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import NetworkErrorView from "../views/NetworkErrorView.vue";
import nProgress from "nprogress";
import PatientService from "@/services/PatientService";
import GStore from "@/store";

const routes = [
  {
    path: "/",
    name: "PatientList",
    component: PatientListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      limit: 3,
    }),
  },
  {
    path: "/patient/:id",
    name: "PatientLayout",
    component: PatientLayout,
    props: true,
    beforeEnter: (to) => {
      return PatientService.getPatient(to.params.id)
        .then((response) => {
          GStore.patient = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404Resources",
              params: { resource: "patient" },
            };
          } else {
            return { name: "NetworkError" };
          }
        });
    },
    children: [
      {
        path: "",
        name: "VaccineDetail",
        props: true,
        component: VaccineDetail,
      },
      {
        path: "",
        name: "PatientDetail",
        props: true,
        component: PatientDetail,
      },
      {
        path: "",
        name: "DoctorComment",
        props: true,
        component: DoctorComment,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(() => {
  nProgress.start();
});
router.afterEach(() => {
  nProgress.done();
});

export default router;
