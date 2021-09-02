import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default axiosApi;

/* process.env.REACT_APP_APIURL // "http://localhost:5000" */