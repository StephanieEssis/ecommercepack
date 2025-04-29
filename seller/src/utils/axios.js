import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
});

export default axiosInstance;
// const res = await axios.get('/api/products?category=sacs-a-main');
