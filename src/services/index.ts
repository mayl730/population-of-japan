import axios from "axios";

const _apiKey = import.meta.env.VITE_API_KEY;

export const APIClient = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  timeout: 8000,
  headers: {
    "X-API-KEY": _apiKey,
  },
});