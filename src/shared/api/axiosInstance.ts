import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/',
  timeout: 5000,
});

export default axiosInstance;