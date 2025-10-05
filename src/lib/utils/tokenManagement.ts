import axiosInstance from "../../config/axiosInstance";

export const setAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  localStorage.removeItem("authToken");
  delete axiosInstance.defaults.headers.Authorization;
};
