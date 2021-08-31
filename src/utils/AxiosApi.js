import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  withCredentials: true,
});

export default axiosApi;