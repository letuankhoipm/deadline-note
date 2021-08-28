import axios, { AxiosInstance } from "axios";

const prodURL = "http://167.99.70.196/";
const devURL = "http://localhost:8000/";
const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

const apiClient: AxiosInstance = axios.create({
    baseURL: prodURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        "Authorization": ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "NO_AUTHORIZATION"
    },
});

export default apiClient;