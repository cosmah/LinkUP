import axios from 'axios';
import { User, UserDemographics } from '../types/user';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const response = await api.get(`/users/email/${email}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

export const getUserDemographicsByUserId = async (userId: number): Promise<UserDemographics> => {
  try {
    const response = await api.get(`/user-demographics/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user demographics');
  }
};

export const updateUserDemographicsByUserId = async (
  userId: number,
  data: Partial<UserDemographics>
): Promise<UserDemographics> => {
  try {
    const response = await api.put(`/user-demographics/${userId}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user demographics');
  }
};