import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // setTimeout(() => {
    //   localStorage.setItem("token", "abcdef");
    // }, 15000);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("request sent");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    console.log("response recieved");
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("unauthorized");
    }

    return Promise.reject(error);
  },
);

export default api;
