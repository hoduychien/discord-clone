import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
import APP_ENV from '@/config/env.config';

const http = axios.create({
  baseURL: APP_ENV.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const newConfig = config;

    const token = localStorage.getItem('auth_token');

    if (token) {
      newConfig.headers.Authorization = `Token ${token}`;
    }

    if (newConfig.data) {
      newConfig.data = JSON.stringify(snakecaseKeys(config.data));
    }

    return newConfig;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log('HTTP-REQUEST-ERROR:', error);
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    const newResponse = response;

    if (newResponse && newResponse.data) {
      let responseData = newResponse.data;
      responseData = camelcaseKeys(newResponse, {
        deep: true
      });

      if (responseData?.data?.data.token) {
        localStorage.setItem('auth_token', responseData?.data?.data.token);
      }

      if (responseData?.data.status === 401) {
        localStorage.setItem('auth_token', '');
      }

      return responseData;
    }

    return newResponse.data;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log('HTTP-RESPONSE-ERROR:', error);
    Promise.reject(error);
  }
);

export default http;
