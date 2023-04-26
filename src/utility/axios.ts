import axios from "axios";
const BASE_URL: any = import.meta.env.VITE_API_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

export const axios_private = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
//   withCredentials: true,
});
