import axios from 'axios';

// const URL = 'http://localhost:5000';

const URL = 'https://cellphones-web.herokuapp.com';

export const getproducts = () => axios.get(`${URL}/api/products`);
export const getproductdetail = (title) =>
  axios.get(`${URL}/api/products/${title}`);
