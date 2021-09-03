import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,

 /*  headers: {

  timeout: 10000,
  headers: {

    'Content-Type': 'application/json'
  }, */
});

export default axiosApi;

/* process.env.REACT_APP_APIURL // "http://localhost:5000" */