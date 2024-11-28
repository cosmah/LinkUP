import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/users/email/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

export const createUserDemographics = async (demographicsData) => {
    try {
        const response = await axios.post(`${API_URL}/user-demographics`, demographicsData);
        return response.data;
    } catch (error) {
        console.error('Error creating user demographics:', error);
        throw error;
    }
};

export const getUserDemographicsByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user-demographics/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user demographics by user ID:', error);
        throw error;
    }
};

export const updateUserDemographicsByUserId = async (userId, demographicsData) => {
    try {
        const response = await axios.put(`${API_URL}/user-demographics/${userId}`, demographicsData);
        return response.data;
    } catch (error) {
        console.error('Error updating user demographics:', error);
        throw error;
    }
};

export const deleteUserDemographicsByUserId = async (userId) => {
    try {
        await axios.delete(`${API_URL}/user-demographics/${userId}`);
    } catch (error) {
        console.error('Error deleting user demographics:', error);
        throw error;
    }
};