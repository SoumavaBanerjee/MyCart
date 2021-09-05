import axios from "axios";
import { order } from "../Types";

// const url = `http://localhost:5000/api/orders`;

const url = `${process.env.REACT_APP_ROOT_URL}/api/orders`;

export const createOrder = (order: order, bearerToken: string) =>
  axios.post(`${url}/`, order, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const fetchOrder = (bearerToken: string, id: string) =>
  axios.get(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

// TODO: properly type paymentResult
export const orderPay = (
  bearerToken: string,
  orderId: string,
  paymentResult: any
) =>
  axios.put(`${url}/${orderId}/pay`, paymentResult, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const fetchUserOrderList = (bearerToken: string) =>
  axios.get(`${url}/userOrderList`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
