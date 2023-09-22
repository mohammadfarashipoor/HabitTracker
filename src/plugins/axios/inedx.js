import axios from "axios";
import { handleApiError } from "@/utilities/helpers";
const axiosInstance = axios.create({
  headers: {
    system: "mammads",
    "gateway-system": "mammads",
    user: "mammads",
    pass: "mammads",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    handleApiError(error);
    return Promise.reject(error);
  }
);

export { axiosInstance };
