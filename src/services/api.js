import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

const getApiToken = async () => {
  const credentials = {
    username: 'admin',
    password: '123qwe'
  }
  
  return api.post('/login', credentials);
};

export const getProducts = async () => {
  const requestTokenData = await getApiToken()
  const token = requestTokenData.data.token
  
  const headers = {
    headers: {
      Authorization: `Baerer ${token}`
    }
  }

  return api.get('/products', headers)
};