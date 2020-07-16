import axios from 'axios';
import {} from 'dotenv';
require('dotenv').config()
const PORT = process.env.REACT_APP_BACKEND_PORT
const HOST = process.env.REACT_APP_BACKEND_HOST

// instace axios
export const axiosBase = axios.create({
  baseURL: `http://${HOST}:${PORT}/`
})
