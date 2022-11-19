import axios from 'axios'
import { host } from '../config'
const baseUrl = `${host}/api/v1`
const headers = {
    'Content-Type': 'application/json'
}
export const loginUser = () => {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts"
    });
}

export const createdminAgent = (data) => {
    headers.authorization = `Bearer ${data.token}`
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/admin/create-agent`,
        headers: headers,
        data: data.data
    }
    return axios(requestOptions);
}

export const getAdminAgents = (payload) => {
    const { skip, limit, token } = payload
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/admin/get-admin`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getTotalAgents = (payload) => {
    const { skip, limit, token } = payload
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/admin/get-admin-agents?skip=${skip}&limit=${limit}`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getAdmin = (token) => {
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/admin/get-admin`,
        headers: headers,
    }
    return axios(requestOptions);
}
export const loginAdminRequest = (data) => {
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/admin/login-admin`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}