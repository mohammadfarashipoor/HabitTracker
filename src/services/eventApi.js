import { axiosInstance } from "@/plugins/axios/inedx";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";

const url = buildApiUrl(baseUrls.BARJAVAND, "data");



/**
 * Get event from server.
 * @returns {Array} return array of events
 * @throws {Error} If there's an error getting the event.
 */
const getEvent = async () => {
  try {
    const config = {
      params: {
        schemaName: "event",
        tags: {
          userId: "c6a65073-937f-4522-b607-2aaea9037914",
        },
      },
    };
    const response = await axiosInstance.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};




/**
 * Posts an event to the server.
 *
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.description
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.creator
 * @param {array} data.participants
 * @returns {Object} return successfull
 * @throws {Error} If there's an error posting the event.
 */
const postEvent = async (data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};


/**
 * Delete event from server.
 * @param {string} id -> eventId
 * @returns {Object} return successfull
 * @throws {Error} If there's an error deleting the event.
 */
const deleteEvent = async (id) => {
  try {
    const config = {
      params: {
        id: id,
        schemaName: "event",
      },
    };
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {

    throw error;
  }
};




/**
 * Patch event to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.description
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.creator
 * @param {array} data.participants
 * @returns {Object} return successfull
 * @throws {Error} If there's an error patching the event.
 */
const patchEvent = async (data) => {
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
 * Put event to the server.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.description
 * @param {string} data.date
 * @param {string} data.fromHour
 * @param {string} data.creator
 * @param {array} data.participants
 * @returns {Object} return successfull
 * @throws {Error} If there's an error patching the event.
 */
const putEvent = async (data) => {
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

export { getEvent, postEvent, deleteEvent, putEvent, patchEvent };
