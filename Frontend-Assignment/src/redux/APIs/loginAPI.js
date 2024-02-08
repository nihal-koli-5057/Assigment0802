import axios from 'axios';
import { baseURL } from '.';

export const loginApi = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseURL}/user/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred during login');
  }
};
