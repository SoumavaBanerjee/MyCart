import axios from "axios";
import { userProfile } from "../Types";

const url = `http://localhost:5000/api/users`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (email: string, password: string) =>
  axios.post(`${url}/login`, { email, password }, config);

export const registerUser = (name: string, email: string, password: string) =>
  axios.post(url, { name, email, password }, config);

export const fetchUserProfile = (id: string, bearerToken: string) =>
  axios.get(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const updateUserProfile = (user: userProfile, bearerToken: string) =>
  axios.put(`${url}/profile`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const fetchUserList = (bearerToken: string) =>
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
