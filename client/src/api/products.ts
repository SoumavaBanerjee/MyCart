import axios from "axios";

// const url = `http://localhost:5000/api/products`;
const url = `${process.env.REACT_APP_URL}/api/products`;

// const url = "https://ecommerce-my-cart.herokuapp.com/api/products";

export const getProducts = () => axios.get(url);

export const getProductItem = (id: string) => axios.get(`${url}/${id}`);
