import axios from "axios";

// const url = `http://localhost:5000/api/config/paypal`;
const url = `${process.env.REACT_APP_URL}/api/config/paypal`;

export const getPaypalClientId = () => axios.get(url);
