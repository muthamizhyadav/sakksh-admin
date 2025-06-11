import axios from "axios";
import { loaderService } from "./loaderService";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    loaderService.show();
    return config;
  },
  (error) => {
    loaderService.hide();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    loaderService.hide();
    return response;
  },
  (error) => {
    loaderService.hide();
    return Promise.reject(error);
  }
);

export default axiosInstance;
