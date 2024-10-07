import axios from 'axios';

const local = 'http://localhost:5000/api/v1/'

const axiosInstance = axios.create({
    baseURL: local
})


export default axiosInstance;