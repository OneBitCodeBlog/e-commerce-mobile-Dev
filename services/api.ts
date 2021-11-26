import axios, { AxiosResponse } from 'axios';
import ApiData from '../DTOs/apiData';
import ApiResponseError from '../DTOs/apiResponseError';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

async function setHeaders(res: AxiosResponse<any>) {
  if (res.headers['access-token'] && res.headers['access-token'] !== '') {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers['client'],
      expiry: res.headers['expiry'],
      'token-type': res.headers['token-type'],
      uid: res.headers['uid'],
    };

    api.defaults.headers = { ...api.defaults.headers, ...apiData };
    await AsyncStorage.setItem('@api-data', JSON.stringify(apiData));
  }
};

api.interceptors.response.use(
  async res => {
    await setHeaders(res);
    return res;
  }, async err => {
    if (err?.response) {
      await setHeaders(err.response);

      const data = err.response.data;

      if (data?.errors?.fields) {
        const errors = data.errors as ApiResponseError;

        const fieldsName = Object.keys(errors.fields);

        let errorMessage = '';

        fieldsName.forEach(
          error => {
            errorMessage += `${error}: ${errors.fields[error].join(',')}\n`;
        });

        throw new Error(errorMessage);
      }

      if (err.response?.data?.errors) 
        throw new Error(err?.response?.data?.errors[0]);
    }

    throw err;
  }
);

api.interceptors.request.use(
  async req => {
    req.headers = { ContentType: 'application/json' };

    if (!req.url?.includes('auth/v1/user/sign_in')) {
      const savedApiData = await AsyncStorage.getItem('@api-data');

      if (!savedApiData) {
        return req;
      }

      const apiData: ApiData = JSON.parse(savedApiData);
      req.headers = { ...req.headers, ...apiData };
    }

    return req;
  }
);

export default api;