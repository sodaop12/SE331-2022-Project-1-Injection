import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/sodaop12/SE331-2022-Project-1-Injection",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPatients(perPage, page) {
    return apiClient.get("/patient?_limit=" + perPage + "&_page=" + page);
  },

  getPatient(id) {
    return apiClient.get("/patient/" + id);
  },
};
