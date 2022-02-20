import axios from "axios";
export const axiosInstance = axios.create({
  headers: { 'X-Custom-Header': 'foobar' }
})
