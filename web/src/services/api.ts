import axios from 'axios';

const api = axios.create({
  // This wil not be harcoded, I promisse.
  baseURL: 'http://localhost:3000'
});

export default api;