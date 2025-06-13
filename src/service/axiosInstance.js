import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000',
  withCredentials: true,
});

const accessKey  = 'authToken';
const refreshKey = 'refreshToken';

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(accessKey);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/** Optional: refresh expired tokens */
let isRefreshing = false;
let queuedRequests = [];

const processQueue = (error, token = null) => {
  queuedRequests.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  queuedRequests = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    if (
      error.response?.status === 401 &&
      !original._retry &&
      localStorage.getItem(refreshKey)
    ) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queuedRequests.push({ resolve, reject });
        })
          .then((token) => {
            original.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(original);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;
      try {
        const { data } = await axiosInstance.post('/auth/refresh', {
          refreshToken: localStorage.getItem(refreshKey),
        });

        localStorage.setItem(accessKey, data.accessToken);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        processQueue(null, data.accessToken);
        return axiosInstance(original);
      } catch (err) {
        processQueue(err, null);
        localStorage.clear();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
