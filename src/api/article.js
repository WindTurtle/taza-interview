import axiosClient from "./axiosClient";

const articleApi = {
  getAll() {
    const url = "/api/index.php/v1/content/article";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/api/index.php/v1/content/article/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/api/index.php/v1/content/article";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/index.php/v1/content/article/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/index.php/v1/content/article/${id}`;
    return axiosClient.delete(url);
  },
};

export default articleApi;
