import { axiosInstance } from "@/plugins/axios/inedx";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";

const url = buildApiUrl(baseUrls.BARJAVAND, "data");

/**
 * Get activity from server.
 * @returns {Array} return array of activities
 * @throws {Error} If there's an error getting the activity.
 */
const getActivity = async () => {
  try {
    const userId = localStorage.getItem("userId");
    const config = {
      params: {
        schemaName: "activity",
        tags: {
          userId: userId,
        },
      },
    };
    const response = await axiosInstance.get(url, config);
    return response?.data?.results;
  } catch (error) {
    throw error;
  }
};

/**
 * Get activity by ID from server.
 * @param {string} id -> activityId
 * @returns {Array} return array of activities
 * @throws {Error} If there's an error getting the activity.
 */
const getActivityById = async (id) => {
  try {
    const config = {
      params: {
        id: id,
      },
    };
    const response = await axiosInstance.get(url, config);
    return response?.data?.results[0]?.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Posts an activity to the server.
 *
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.toHour
 * @param {string} data.activityType
 * @returns {Object} return successfull
 * @throws {Error} If there's an error posting the activity.
 */
const postActivity = async (data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete activity from server.
 * @param {string} id -> activityId
 * @returns {Object} return successfull
 * @throws {Error} If there's an error deleting the activity.
 */
const deleteActivity = async (id) => {
  try {
    const config = {
      params: {
        id: id,
        schemaName: "activity",
      },
    };
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Patch activity to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.toHour
 * @param {string} data.activityType
 * @returns {Object} return successfull
 * @throws {Error} If there's an error patching the activity.
 */
const patchActivity = async (data) => {
  try {
    const config = {
      params: {
        id: data.id,
      },
    };
    const response = await axiosInstance.patch(url, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Put activity to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.toHour
 * @param {string} data.activityType
 * @returns {Object} return successfull
 * @throws {Error} If there's an error puting the activity.
 */
const putActivity = async (data) => {
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

export {
  getActivity,
  postActivity,
  deleteActivity,
  putActivity,
  patchActivity,
  getActivityById,
};
