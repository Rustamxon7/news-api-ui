import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axios;

export const baseAxios = axios.create();
