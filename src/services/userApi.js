import { axiosInstance } from "@/plugins/axios";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";

const url = buildApiUrl(baseUrls.BARJAVAND, "data");

/**
 * Posts an user to the server.
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.age
 * @returns {Object} return successfull
 * @throws {Error} If there's an error posting the user.
 */
const postUser = async (data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get user from server.
 * @returns {Object} return user informations
 * @throws {Error} If there's an error getting the user.
 */
const getUser = async (id) => {
  try {
    const config = {
      params: {
        schemaName: "user",
        tags: {
          userId: id,
        },
      },
    };
    const url = buildApiUrl(baseUrls.AUTH_TEST_API);
    const response = await axiosInstance.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Put an user to the server.
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.age
 * @returns {Object} return successfull
 * @throws {Error} If there's an error putting the user.
 */
const putUser = async (data) => {
  try {
    const config = {
      params: {
        id: data.id,
      },
    };
    const response = await axiosInstance.put(url, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Patch an user to the server.
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.age
 * @returns {Object} return successfull
 * @throws {Error} If there's an error patching the user.
 */
const patchUser = async (data) => {
  try {
    const config = {
      params: {
        id: data.id,
      },
    };
    const response = await axiosInstance.patch(url, data, config)
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete user from server.
 * @param {string} id -> userId
 * @returns {Object} return successfull
 * @throws {Error} If there's an error deleting the user.
 */
const deleteUser = async (id) => {
  try {
    const config = {
      params: {
        id: id,
        schemaName: "user",
      },
    };
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

/**
 * Get an user by email from the server.
 *
 * @param {string} email
 * @returns {Object} return user information
 * @throws {Error} If there's an error getting the user.
 */
const getUserByEmail = async (email) => {
  try {
    const config = {
      params: {
        schemaName: "user",
        tags: {
          email: email,
        },
      },
    };
    const url = buildApiUrl(baseUrls.AUTH_TEST_API);
    const response = await axiosInstance.get(url, config);
    return response?.data?.results[0];
  } catch (error) {
    throw error;
  }
};

export { postUser, getUser, putUser, patchUser, deleteUser, getUserByEmail };
