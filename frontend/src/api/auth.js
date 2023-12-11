// src/api/auth.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Update with your backend URL

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/cashcalc/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logIn = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/cashcalc/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
