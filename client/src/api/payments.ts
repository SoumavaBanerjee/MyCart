import axios from "axios";

const url = `http://localhost:5000/api/config/paypal`;

export const getPaypalClientId = () => axios.get(url);
