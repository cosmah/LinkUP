import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Custom error class for API errors
class APIError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code;
  }
}

// Helper function to handle API errors
const handleApiError = (error, context) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    
    // Log detailed error information
    console.error(`${context}:`, {
      status,
      message,
      url: error.config?.url,
      method: error.config?.method,
    });

    throw new APIError(message, status, error.code);
  }
  
  // For non-Axios errors
  console.error(`${context} - Unexpected error:`, error);
  throw error;
};

// User APIs
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error creating user');
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/email/${encodeURIComponent(email)}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null; // Return null for non-existent user
    }
    return handleApiError(error, 'Error fetching user by email');
  }
};

// User Demographics APIs
export const createUserDemographics = async (demographicsData) => {
  try {
    const response = await axios.post(`${API_URL}/user-demographics`, demographicsData);
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error creating user demographics');
  }
};

export const getUserDemographicsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user-demographics/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null; // Return null for non-existent demographics
    }
    return handleApiError(error, 'Error fetching user demographics');
  }
};

export const updateUserDemographicsByUserId = async (userId, demographicsData) => {
  try {
    const response = await axios.put(`${API_URL}/user-demographics/${userId}`, demographicsData);
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error updating user demographics');
  }
};

export const deleteUserDemographicsByUserId = async (userId) => {
  try {
    await axios.delete(`${API_URL}/user-demographics/${userId}`);
    return true; // Indicate successful deletion
  } catch (error) {
    return handleApiError(error, 'Error deleting user demographics');
  }
};

// Configure axios defaults
axios.defaults.headers.common['Content-Type'] = 'application/json';