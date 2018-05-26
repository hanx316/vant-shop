import axios from 'axios'
import app from '../main'
let $ax = axios.create()

$ax.interceptors.request.use(config => {
  const token = app.State.token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  // if (process.env.NODE_ENV === 'development') {
  //   config.baseURL = 'http://23.247.25.126'
  // }
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

$ax.interceptors.response.use(res => {
  return res
}, err => {
  const res = err.response
  return Promise.reject(err)
})

export default $ax