import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  withCredentials: true,

  headers: {
    "Access-Control-Allow-Origin": "https://talkdata.herokuapp.com/",
    "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
  },
});

export default axiosApi;

/* process.env.REACT_APP_APIURL // "http://localhost:5000" */