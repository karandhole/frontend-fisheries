import axios from "axios";
import PATHS from "./apiEndPoints";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://api.pcmcdivyangbhavan.org";

const getHeaders = () => {
  const authToken = sessionStorage.getItem("@authToken");
  const headers = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return headers;
};

class ApiManager {
  static adminLogin = async (data) => {
    try {
      const url = BASE_URL + PATHS.ADMIN_LOGIN;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static googleLogin = async (data) => {
    try {
      const url = BASE_URL + PATHS.GOOGLE_LOGIN;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createUser = async (data) => {
    try {
      const url = BASE_URL + PATHS.CREATE_USER;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getUsers = async () => {
    try {
      const url = BASE_URL + PATHS.GET_USERS;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static userLogin = async (data) => {
    try {
      const url = BASE_URL + PATHS.USER_LOGIN;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static addCompetetion = async (data) => {
    try {
      const url = BASE_URL + PATHS.CREATE_CONTEST;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getCompetetions = async () => {
    try {
      const url = BASE_URL + PATHS.GET_CONTESTS;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static addInCompetetion = async (data) => {
    try {
      const url = BASE_URL + PATHS.ADD_IN_CONTEST;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getCompetetionDetail = async (id) => {
    try {
      const url = BASE_URL + PATHS.CREATE_CONTEST;
      const response = await axios.get(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSubmissions = async () => {
    try {
      const url = BASE_URL + PATHS.GET_SUBMISSIONS;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getUserDetails = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_USER_DETAIL;
      const response = await axios.get(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static updateUserDetails = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.GET_USER_DETAIL;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSubmissionByContest = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_SUBMISSIONS_NY_CONTEST;
      const response = await axios.get(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static updateWinner = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.UPDATE_WINNER;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static editSubmission = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.ADD_IN_CONTEST;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSubmissionsByUser = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_SUBMISSIONS_BY_USER;
      const response = await axios.get(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getActiveCompetetions = async () => {
    try {
      const url = BASE_URL + PATHS.GET_ACTIVE_COMPETETION;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSignedUrl = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_SIGNED_URL;
      const response = await axios.get(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static changePassword = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.CHANGE_PASSWORD;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static sendResetLink = async (data) => {
    try {
      const url = BASE_URL + PATHS.SEND_RESET_LINK;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static sendOtp = async (data) => {
    try {
      const url = BASE_URL + PATHS.SEND_OTP;
      const response = await axios.patch(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static forgotPassword = async (data) => {
    try {
      const url = BASE_URL + PATHS.FORGOT_PASSWORD;
      const response = await axios.patch(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static visitCounter = async () => {
    try {
      const url = BASE_URL + PATHS.VISIT_COUNTER;
      const response = await axios.post(url);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createFeedback = async (data) => {
    try {
      const url = BASE_URL + PATHS.CREATE_FEEDBACK;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getFeedbacks = async () => {
    try {
      const url = BASE_URL + PATHS.GET_FEEDBACKS;
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };

  static createVender = async (data) => {
    try {
      const url = BASE_URL + PATHS.CREATE_VENDER;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getVender = async () => {
    try {
      const url = BASE_URL + PATHS.GET_VENDER;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static venderLogin = async (data) => {
    try {
      const url = BASE_URL + PATHS.VENDER_LOGIN;
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getVenderDetails = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_VENDER;
      const headers = getHeaders();
      const response = await axios.get(`${url}/${id}`, headers);
      return response;
    } catch (error) {
      console.log("from getVendorDetails :" + error);
      return error?.response;
    }
  };
  static updateVenderDetails = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.GET_VENDER;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createTender = async (data) => {
    try {
      const url = BASE_URL + PATHS.CREATE_TENDER;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getTenders = async () => {
    try {
      const url = BASE_URL + PATHS.GET_TENDER;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createTenderSubmission = async (data) => {
    try {
      const url = BASE_URL + PATHS.TENDER_SUBMISSION;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getTenderSubmission = async () => {
    try {
      const url = BASE_URL + PATHS.GET_TENDER_SUBMISSIONS;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSubmissionByTenderId = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_TENDER_SUBMISSIONS + "/" + id;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getSubmissionByVendorId = async (id) => {
    try {
      const url = BASE_URL + PATHS.GET_TENDER_SUBMISSIONS_BY_VENDOR + "/" + id;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static updateTendorSubmission = async (id, data) => {
    try {
      const url = BASE_URL + PATHS.GET_TENDER_SUBMISSIONS;
      const response = await axios.patch(`${url}/${id}`, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static updateAdmin = async (data) => {
    try {
      const url = BASE_URL + PATHS.ADMIN;
      const response = await axios.patch(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getAdmin = async () => {
    try {
      const url = BASE_URL + PATHS.ADMIN;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static sendOtpToAdmin = async () => {
    try {
      const url = BASE_URL + PATHS.AUTHORIZE_OTP;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static verifyAdminOtp = async (data) => {
    try {
      const url = BASE_URL + PATHS.AUTHORIZE_OTP;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static sendMail = async () => {
    try {
      const url = BASE_URL + PATHS.SEND_MAIL;
      const response = await axios.post(url, undefined, getHeaders());
      console.log("sendmail data", response?.data);
      return response?.data;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createCareer = async (data) => {
    try {
      const url = BASE_URL + PATHS.CARRIER;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getCareers = async () => {
    try {
      const url = BASE_URL + PATHS.CARRIER;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static deleteCareer = async (id) => {
    try {
      const url = BASE_URL + PATHS.CARRIER;
      const response = await axios.delete(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createGalleryImage = async (data) => {
    try {
      const url = BASE_URL + PATHS.GALLERY;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getGalleryImages = async () => {
    try {
      const url = BASE_URL + PATHS.GALLERY;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static deleteGalleryImage = async (id) => {
    try {
      const url = BASE_URL + PATHS.GALLERY;
      const response = await axios.delete(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static createBlog = async (data) => {
    try {
      const url = BASE_URL + PATHS.BLOG;
      const response = await axios.post(url, data, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static getBlogs = async () => {
    try {
      const url = BASE_URL + PATHS.BLOG;
      const response = await axios.get(url, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
  static deleteBlog = async (id) => {
    try {
      const url = BASE_URL + PATHS.BLOG;
      const response = await axios.delete(`${url}/${id}`, getHeaders());
      return response;
    } catch (error) {
      console.log(error);
      return error?.response;
    }
  };
}

export default ApiManager;
