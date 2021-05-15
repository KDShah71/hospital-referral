import axios from "axios";
import { REACT_APP_BACKEND_URL, REACT_APP_HOSPITAL_ID } from "./env";

const baseURL = REACT_APP_BACKEND_URL;

let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const hospitalId = REACT_APP_HOSPITAL_ID;
