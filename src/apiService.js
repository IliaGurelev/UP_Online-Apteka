import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchProducts() {
  try {
    const response = await apiClient.get('/product');
    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    throw error; 
  }
}