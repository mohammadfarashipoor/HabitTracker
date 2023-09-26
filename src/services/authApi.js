import { axiosInstance } from "@/plugins/axios";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";
import { useToast } from "vue-toastification";
const toast = useToast();

/**
 * log-in user to the server.
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Object} return token
 */
const login = async (data) => {
  const url = buildApiUrl(baseUrls.USER_MANAGER, "login");
  try {
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    const { message } = handleApiError(error);
    if (message) {
      toast.error(message);
    }
  }
};

/**
 * register user to the server.
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Object} return userId
 */
const signup = async (data) => {
  const url = buildApiUrl(baseUrls.USER_MANAGER, "signUp");
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * get user token from the server.
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Object} return token
 */
const getUserToken = async (data) => {
  const url = buildApiUrl(baseUrls.AUTHORIZATION, "userToken");
  const userData = {
    fields: {
      username: data.email,
      password: data.password,
    },
    scopes: [],
  };
  try {
    const response = await axiosInstance.post(url, userData);
    return response?.data?.token;
  } catch (error) {
    throw error;
  }
};

/**
 * get user token from the server.
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.name
 * @param {number} data.age
 * @returns {Object} return token and userId
 */
const handleSignup = async (data) => {
  const url = baseUrls.CUSTOME_SERVICE_REGISTER;
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error?.response?.status === 500) {
        toast.error("خطا در برقراری ارتباط");
      } else {
        let message = error?.response?.data?.data?.message;
        toast.error(message);
      }
    }
  }
};

export { login, signup, getUserToken, handleSignup };
