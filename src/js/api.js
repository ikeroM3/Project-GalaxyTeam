import axios from 'axios';

const API_BASE = 'https://paw-hut.b.goit.study/api';

export const getAnimals = async ({
  page = 1,
  limit = 9,
  categoryId = '',
} = {}) => {
  try {
    const response = await axios.get(`${API_BASE}/animals`, {
      params: { page, limit, ...(categoryId && { categoryId }) },
    });
    return response.data;
  } catch (error) {
    console.error('API Error (getAnimals):', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE}/categories`);
    return response.data;
  } catch (error) {
    console.error('API Error (getCategories):', error);
    throw error;
  }
};

export const createOrder = async formData => {
  try {
    const response = await axios.post(`${API_BASE}/orders`, formData);
    return response.data;
  } catch (error) {
    console.error('API Error (createOrder):', error);
    throw error;
  }
};
