import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
});

export default axiosInstance;
// const res = await axios.get('/api/products?category=sacs-a-main');
// axios.get(`${import.meta.env.VITE_API_URL}/api/produits`)
axios.get('/api/products'); // PAS besoin de http://localhost
