import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:6001/erp",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
