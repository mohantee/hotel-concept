import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.error(message);
    return Promise.reject(error);
  },
);
