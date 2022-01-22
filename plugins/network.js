export default function ({ $axios, $auth }, inject) {
  const network = {};

  network.auth = {
    register: {
      employer: (data) => $axios.post("/api/users/register/employer/", data),
      freelancer: (data) =>
        $axios.post("/api/users/register/freelancer/", data),
    },
    login: (data) => $auth.loginWith("defaultStrategy", { data }),
    logout: () => $auth.logout(),
  };

  network.profile = {
    get: (id) => $axios.get(`/api/users/profile/${id}/`),
    edit: (data) => $axios.patch(`/api/users/profile/`, data),
  };

  network.project = {
    list: () => $axios.get("/api/projects/list/"),
    create: (data) => $axios.post("/api/projects/list/", data),
    get: (id) => $axios.get(`/api/projects/${id}/`),
    delete: (id) => $axios.get(`/api/projects/${id}/`),
    employer: () => $axios.get("/api/projects/list/employer/"),
    freelancer: () => $axios.get("/api/projects/list/freelancer/"),
  };

  network.projectRequest = {
    list: (id) => $axios.get(`/api/projects/${id}/request/`),
    create: (id) => $axios.post(`/api/projects/${id}/request/`),
    remove: (id) => $axios.post(`/api/projects/${id}/request/remove/`),
    accept: (req_id) => $axios.post(`/api/projects/request/${req_id}/accept/`),
  };

  network.category = {
    list: () => $axios.get("/api/projects/categories/"),
  };

  inject("network", network);
}
