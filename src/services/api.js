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
    headers: {
      Authorization: `Baerer ${token}`
    }
  }

  return api.get('/products', headers)
};

export const getTopFive = async (token) => {
  
  const headers = {
      Authorization: `Baerer ${token}`
  }

  return api.post('orders/top-five', { headers })
};

const body = [
  {
    name: "Pastel de Carne",
    quantity: 10
  },
  {
    name: "Camarão Cremoso",
    quantity: 11
  },
  {
    name: "Frango Mineiro",
    quantity: 12
  },
  {
    name: "Pastel de Queijo",
    quantity: 13
  },
  {
    name: "Chocolate com Morango",
    quantity: 14
  }
]