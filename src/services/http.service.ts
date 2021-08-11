import axios, { AxiosInstance } from "axios";

const prodURL = "http://167.99.70.196/";
const devURL = "http://localhost:8000/"

const apiClient: AxiosInstance = axios.create({
    baseURL: prodURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
    },
});

export default apiClient;