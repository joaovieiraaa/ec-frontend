import axios, { type AxiosInstance } from "axios";

const hostname = window.location.hostname;
const baseURL = import.meta.env.API_BASE_URL || "http://localhost:3000/v1";

const ApiLogic: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "X-Locale": "en",
    "Content-Type": "application/json",
    identifier:
      hostname === "localhost" || hostname === "10.0.0.137"
        ? "express-api-dev.jimpisoft.pt"
        : hostname,
  },
});

ApiLogic.interceptors.request.use(
  (config: any) => config,
  (error: any) => Promise.reject(error)
);

export default ApiLogic;
