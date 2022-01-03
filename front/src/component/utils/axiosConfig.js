import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'http://localhost:1000/'
})

export default axiosConfig;