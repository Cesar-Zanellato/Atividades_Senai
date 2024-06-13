// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escola.com', // URL base do backend
});

export default api;
