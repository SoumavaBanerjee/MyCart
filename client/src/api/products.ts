import axios from "axios";

const url = `http://192.168.0.102:5000/api/products`;

export const getProducts = () => axios.get(url);

export const getProductItem = (id: string) => axios.get(`${url}/${id}`);
