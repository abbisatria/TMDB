import {default as axios} from 'axios';
import {REACT_APP_API_URL as API_URL} from '@env';

const http = () => {
  return axios.create({
    baseURL: API_URL,
    timeout: 30000,
  });
};

export default http;
