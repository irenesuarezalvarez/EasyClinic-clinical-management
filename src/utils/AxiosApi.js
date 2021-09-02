import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  },
});

export default axiosApi;

/* process.env.REACT_APP_APIURL // "http://localhost:5000" */