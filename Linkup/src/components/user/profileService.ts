// profileService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface UserDemographics {
  user_id: number;
  date_of_birth?: string;
  gender?: string;
  religion?: string;
  address?: string;
}

export const saveUserDemographics = async (userId: number, demographicsData: Omit<UserDemographics, 'user_id'>) => {
  try {
    // First, try to get existing demographics
    const response = await axios.get(`${API_URL}/user-demographics/${userId}`);
    
    // If demographics exist, update them
    if (response.data) {
      const updateResponse = await axios.put(
        `${API_URL}/user-demographics/${userId}`,
        demographicsData
      );
      return updateResponse.data;
    }
  } catch (error) {
    // If we get a 404, it means no demographics exist yet
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      // Create new demographics
      const createResponse = await axios.post(
        `${API_URL}/user-demographics`,
        {
          user_id: userId,
          ...demographicsData
        }
      );
      return createResponse.data;
    }
    
    // If it's any other error, throw it
    throw error;
  }
};

export const getUserDemographics = async (userId: number): Promise<UserDemographics | null> => {
  try {
    const response = await axios.get(`${API_URL}/user-demographics/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};