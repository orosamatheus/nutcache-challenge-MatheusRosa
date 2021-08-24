import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: `https://crudcrud.com/api/${process.env.REACT_APP_TOKEN_API}/`
})
export { api };