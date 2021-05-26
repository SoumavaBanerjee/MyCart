import axios from "axios";

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
