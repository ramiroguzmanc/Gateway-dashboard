import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://developer.gatewayit.co/'
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem('token')}`
  }
  return config
})
