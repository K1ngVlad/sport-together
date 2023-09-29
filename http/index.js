import axios from 'axios';

const API_URL = 'https://kingvlad.pythonanywhere.com/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`);
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  }
);

export { API_URL, $api };
