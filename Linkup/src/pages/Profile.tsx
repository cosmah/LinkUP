import React, { useState, useEffect } from 'react';
import { ProfileHeader } from './components/profile/ProfileHeader';
import { ProfileForm } from './components/profile/ProfileForm';
import { getUserByEmail, getUserDemographicsByUserId, updateUserDemographicsByUserId } from '../services/api';
import { ProfileFormData, User, UserDemographics } from '../types/user';

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    email: '',
    dob: '',
    gender: '',
    religion: '',
    address: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // In a real app, you'd get the email from your auth context
        const email = 'user@example.com'; // Replace with actual user email
        const userData = await getUserByEmail(email);
        setUser(userData);

        const demographicsData = await getUserDemographicsByUserId(userData.id);
        setFormData(prev => ({
          ...prev,
          name: userData.name,
          email: userData.email,
          dob: demographicsData.date_of_birth,
          gender: demographicsData.gender,
          religion: demographicsData.religion,
          address: demographicsData.address,
        }));
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!user) return;

    try {
      await updateUserDemographicsByUserId(user.id, {
        user_id: user.id,
        date_of_birth: formData.dob,
        gender: formData.gender,
        religion: formData.religion,
        address: formData.address,
      });
      setSuccess('Profile updated successfully');
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            {user && <ProfileHeader name={user.name} email={user.email} />}
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-semibold mb-6">Profile Settings</h1>
              <ProfileForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                error={error}
                success={success}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;