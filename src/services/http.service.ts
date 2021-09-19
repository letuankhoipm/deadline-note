import axios, { AxiosInstance } from "axios";

const prodURL = "http://134.209.101.116/";
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