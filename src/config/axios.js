import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

const user = localStorage.getItem('user')

if (user) {
  const { token } = JSON.parse(user)
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
