import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://deeprise-solution.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default axiosInstance;
