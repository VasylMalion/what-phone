import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:3052/"
})

const $authHost = axios.create({
    baseURL: "http://localhost:3052/"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor, error => {
    return Promise.reject(error)
})

export {
    $host,
    $authHost
}