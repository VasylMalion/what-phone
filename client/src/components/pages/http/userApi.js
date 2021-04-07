import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password, name, surname) => {
    const {data} = await $host.post('api/registration', {email, password, name, surname})
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {email, password})
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.post('api/auth')
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}