import axios from "axios";
import { order } from "../Types";

const url = `http://localhost:5000/api/orders`;

export const createOrder = (order: order, bearerToken: string) =>
  axios.post(`${url}/`, order, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });
