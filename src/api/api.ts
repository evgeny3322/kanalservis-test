import axios, { AxiosInstance } from "axios";

export const api = (): AxiosInstance => {
    return axios.create({
        baseURL: `https://jsonplaceholder.typicode.com`
    });
};
