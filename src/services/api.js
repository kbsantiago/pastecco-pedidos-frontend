import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const getApiToken = async (username, password) => {
  const credentials = {
    username: username,
    password: password,
  }
  
  return api.post('/login', credentials);
};

export const getProducts = async (token) => {
  
  const headers = {
    Authorization: `Baerer ${token}`
  }

  return api.get('/products', { headers: headers })
};

export const getTopFive = async (token) => {
  
  const headers = {
    Authorization: `Baerer ${token}`
  }

  return api.get('orders/top-five', { headers: headers })
};