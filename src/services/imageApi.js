import { axiosInstance } from "@/plugins/axios";
import { buildApiUrl, handleApiError } from "@/utilities/helpers";
import { baseUrls } from "@/utilities/baseUrls";

const url = buildApiUrl(baseUrls.FILE_STORAGE, "file");


/**
 * create formData array of files
 * @param {array} files -> array of input files (images) 
 * @returns {FormData} return array of images(FormData) 
 */
const buildForm = (files) => {
  let data = new FormData();
  for (const file of files) {
    // console.log("each file ", file);
    data.append("file", file , file.name);
  }
  return data;
};


/**
 * Posts array of images to the server.
 * @param {formData} images
 * @returns {string} return imageIds
 * @throws {Error} If there's an error posting the images.
 */
const postImage = async (images) => {
  try {
    const data = buildForm(images);
    const response = await axiosInstance.put(url, data);
    // console.log(response);
    return response?.data;
  } catch (error) {
    throw error;
  }
};


/**
 * Get image from the server.
 * @param {string} id
 * @returns {file} return image file
 * @throws {Error} If there's an error getting the images.
 */
const getImage = async (id) => {
  try {
    const config = {
      params: {
        id: id,
      },
    };
    const response = await axiosInstance.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export { postImage, getImage };
