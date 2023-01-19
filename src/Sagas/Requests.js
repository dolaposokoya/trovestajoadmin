import axios from 'axios'
import { host } from '../config'
const baseUrl = `${host}/api/v1`

const headers = {
    'Accept': 'application/json'
}
export const loginUser = () => {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts"
    });
}

export const createdminAgent = (data,token) => {
    headers.authorization = `Bearer ${token}`
    headers['Content-Type'] = 'multipart/form-data'
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/admin/create-agent`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}

export const getSuperAdmins = (token) => {
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/super/get/registered/admin`,
        // url: `${baseUrl}/super/get-created-agents`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getAdminAgents = (payload) => {
    const { skip, limit, token } = payload
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/admin/get-admin-agents?skip=${skip || 0}&limit=${limit || 10}`,
        // url: `${baseUrl}/admin/get-admin`,
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
export const loginSuperAdminRequest = (data) => {
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/super/login-super-admin`,
        headers: headers,
        data: data
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

export const getAdminAgentCollection = (data) => {
    const { agent_id, token } = data
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/admin/thrifts/${agent_id}`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getSuperAdminAgentCollection = (data) => {
    const { agent_id, token } = data
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/super/get-created-agents-collection/${agent_id}`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getCollectionHistory = (data) => {
    const { collection_id, token } = data
    headers.authorization = `Bearer ${token}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/super/collection-history/${collection_id}`,
        headers: headers,
    }
    return axios(requestOptions);
}