export default function ({ $axios, $auth }, inject) {
  const requests = {
    get: (url, config) => $axios.get(url, config),
    post: (url, data, config) => $axios.post(url, data, config),
    put: (url, data, config) => $axios.put(url, data, config),
    patch: (url, data, config) => $axios.patch(url, data, config),
    delete: (url, config) => $axios.delete(url, config),
  };

  const network = {};

  network.auth = {
    register: {
      employer: (data) => requests.post("/api/users/register/employer/", data),
      freelancer: (data) =>
        requests.post("/api/users/register/freelancer/", data),
    },
    login: (data) => $auth.loginWith("defaultStrategy", { data }),
    logout: () => $auth.logout(),
  };

  network.profile = {
    get: (id) => requests.get(`/api/users/profile/${id}/`),
    edit: (data) => requests.patch(`/api/users/profile/`, data),
  };

  network.project = {
    list: () => requests.get("/api/projects/list/"),
    create: (data) => requests.post("/api/projects/list/", data),
    get: (id) => requests.get(`/api/projects/${id}/`),
    delete: (id) => requests.get(`/api/projects/${id}/`),
  };

  network.projectRequest = {
    list: (id) => requests.get(`/api/projects/${id}/request/`),
    create: (id) => requests.post(`/api/projects/${id}/request/`),
    remove: (id) => requests.post(`/api/projects/${id}/request/remove/`),
  };

  inject("network", network);
}
