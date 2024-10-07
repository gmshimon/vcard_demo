import axios from "axios"

const local = 'http://localhost:5000/api/v1/'

const axiosSecure = axios.create({
    baseUrl:local
})

axiosSecure.interceptors.request.use(
    config => {
        const token = localStorage.getItem('userToken')
        const {access_token} = JSON.parse(token)

        if(access_token) {
            config.headers.Authorization = `Bearer ${access_token}`
        }

        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default axiosSecure