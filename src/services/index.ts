import axios, { type AxiosInstance } from "axios";

const hostname = window.location.hostname;
const baseURL = import.meta.env.API_BASE_URL || "http://localhost:3000/v1";

const ApiLogic: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "x-locale": "en",
    "x-identifier": hostname,
    "Content-Type": "application/json",
  },
});

ApiLogic.interceptors.request.use(
  (config: any) => config,
  (error: any) => Promise.reject(error)
);

export default ApiLogic;
