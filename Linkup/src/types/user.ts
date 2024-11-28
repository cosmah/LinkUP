export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface UserDemographics {
  user_id: number;
  date_of_birth: string;
  gender: string;
  religion: string;
  address: string;
}

export interface ProfileFormData {
  name: string;
  email: string;
  dob: string;
  gender: string;
  religion: string;
  address: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}