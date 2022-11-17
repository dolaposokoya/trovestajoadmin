import axios from 'axios'
import { host } from '../config'
const baseUrl = `${host}/api/v1`
const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'authorization': `Bearer ${'token'}`
}
export const loginUser = () => {
  return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts"
    });
}

export const createdminAgent = (data) => {
console.log('Datata',data)
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/admin/create-agent`,
        data: data
    }
    return axios(requestOptions);
}