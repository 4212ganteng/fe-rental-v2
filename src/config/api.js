import axios from "axios";
export const API = axios.create({
  baseURL: "http://103.115.164.244:6001/erp",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
