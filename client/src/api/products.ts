import axios from "axios";
import { product } from "../Types";

const url = `http://localhost:5000/api/products`;

export const getProducts = () => axios.get<product[]>(url);

export const getProductItem = (id: string) =>
  axios.get<product>(`${url}/${id}`);
