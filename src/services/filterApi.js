import { axiosInstance } from "@/plugins/axios/inedx";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";

/**
 * Get filter by day from the server.
 * @param {Object} data -> userId
 * @returns {array} return array of activities and activityTypes
 * @throws {Error} If there's an error patching the event.
 */
const getDayFilter = async (data) => {
  const url = baseUrls.CUSTOME_SERVICE_FILTER_DAY;
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get filter by week from the server.
 * @param {Object} data -> userId
 * @returns {array} return array of activities and activityTypes
 * @throws {Error} If there's an error patching the event.
 */
const getWeekFilter = async (data) => {
  const url = baseUrls.CUSTOME_SERVICE_FILTER_WEEK;
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get filter by month from the server.
 * @param {Object} data -> userId
 * @returns {array} return array of activities and activityTypes
 * @throws {Error} If there's an error patching the event.
 */
const getMonthFilter = async (data) => {
  const url = baseUrls.CUSTOME_SERVICE_FILTER_MONTH;
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get filter by year from the server.
 * @param {Object} data -> userId
 * @returns {array} return array of activities and activityTypes
 * @throws {Error} If there's an error patching the event.
 */
const getYearFilter = async (data) => {
  const url = baseUrls.CUSTOME_SERVICE_FILTER_YEAR;
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export { getDayFilter, getWeekFilter, getMonthFilter, getYearFilter };
