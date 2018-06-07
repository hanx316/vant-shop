import axios from 'axios'
import app from '../main'
let $ax = axios.create()

$ax.interceptors.request.use(config => {
  const token = app.State.token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

$ax.interceptors.response.use(res => {
  if (res.data.code === -2) {
    app.$router.replace('/login')
  }
  return res
}, err => {
  const res = err.response
  return Promise.reject(err)
})

export default $ax