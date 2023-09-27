import { axiosInstance } from "@/plugins/axios";
import { buildApiUrl, handleApiError, buildData } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";
import { activityTypeTag } from "@/utilities/buildTags";

const url = buildApiUrl(baseUrls.BARJAVAND, "data");

/**
 * Get activity types from server.
 * @returns {Array} return array of activityTypes
 * @throws {Error} If there's an error getting the activityTypes.
 */
const getActivityType = async () => {
  try {
    const userId = localStorage.getItem("userId");
    const config = {
      params: {
        schemaName: "activityType",
        tags: {
          userId: userId,
        },
      },
    };
    const response = await axiosInstance.get(`https://62c54870134fa108c24d269c.mockapi.io/activityType/`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get an activity type name from the server.
 * @param {string} id -> activity type id
 * @returns {string} returns activity type name
 * @throws {Error} If there's an error getting an activityType.
 */
const getActivityTypeNameById = async (id) => {
  try {
    const config = {
      params: {
        id: id,
      },
    };
    const response = await axiosInstance.get(url, config);
    return response?.data?.results[0]?.data?.title;
  } catch (error) {
    throw error;
  }
};

/**
 * Posts an activityType to the server.
 *
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.activityCounter
 * @returns {Object} return successfull
 * @throws {Error} If there's an error posting the activityType.
 */
const postActivityType = async (data) => {
  try {
    const response = await axiosInstance.post(`https://62c54870134fa108c24d269c.mockapi.io/activityType/`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete activityType from server.
 * @param {string} id -> activityTypeId
 * @returns {Object} return successfull
 * @throws {Error} If there's an error deleting the activityType.
 */
const deleteActivityType = async (id) => {
  try {
    const config = {
      params: {
        id: id,
        schemaName: "activityType",
      },
    };
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {

    throw error;
  }
};

/**
 * Patch activityType to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.activityCounter
 * @returns {Object} return successfull
 * @throws {Error} If there's an error patching the activityType.
 */
const patchActivityType = async (data) => {
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
 * Put activityType to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.activityCounter
 * @returns {Object} return successfull
 * @throws {Error} If there's an error puting the activityType.
 */
const putActivityType = async (data) => {
  try {
    const config = {
      params: {
        id: data.id,
      },
    };
    const response = await axiosInstance.put(`https://62c54870134fa108c24d269c.mockapi.io/activityType/${data.id}`, data);
    return response;
  } catch (error) {

    throw error;
  }
};

/**
 * Get an activity type from the server.
 * @param {string} id -> activity type id
 * @returns {string} returns activity type name
 * @throws {Error} If there's an error getting an activityType.
 */
const getActivityTypeById = async (id) => {
  try {
    const config = {
      params: {
        id: id,
      },
    };
    const response = await axiosInstance.get(`https://62c54870134fa108c24d269c.mockapi.io/activityType/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Increase and Decrease activityCoutner .
 * @param {string} activityTypeId -> activity type id
 * @param {string} action -> add or delete
 * @returns {Object} returns successfull
 * @throws {Error} If there's an error for Increase and Decrease activityCoutner.
 */
const handleActivityCounter = async (activityTypeId, action) => {
  try {
    const res = await getActivityTypeById(activityTypeId);
    const activityType = res?.data;
    let newData = {
      title: activityType.title,
    };
    if (action === "add") {
      newData.activityCounter = ++activityType.activityCounter;
    } else if (action === "delete") {
      newData.activityCounter = --activityType.activityCounter;
    }
    let postData = buildData(newData, undefined, "activityType");
    postData.id = activityTypeId;

    const response = await putActivityType(postData);
  } catch (error) {
    throw error;
  }
};
handleActivityCounter(1,"add")
export {
  getActivityType,
  postActivityType,
  deleteActivityType,
  putActivityType,
  patchActivityType,
  getActivityTypeNameById,
  handleActivityCounter,
};
