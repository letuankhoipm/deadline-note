import axios, { AxiosInstance } from "axios";

const prodURL = "http://167.71.206.8/";
const devURL = "http://localhost:8000/"

const apiClient: AxiosInstance = axios.create({
    baseURL: prodURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
    },
});

export default apiClient;