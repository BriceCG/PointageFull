import axios from 'axios'
// instace axios
export const axiosBase = axios.create({
  baseURL: 'http://localhost:4000/'
})
