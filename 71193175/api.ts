import { axiosInstance } from "./axios-instance";
export const axiosInstanceCounter = () => {
  return axiosInstance({
    method: 'post'
  }).then((data) => {
    console.log(data)
  })
}
