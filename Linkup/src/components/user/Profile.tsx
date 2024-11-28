// Profile.tsx
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  getUserByEmail,
  getUserDemographicsByUserId,
  updateUserDemographicsByUserId
} from "@/context/api";
import { ProfileDisplay } from "./ProfileDisplay";
import { ProfileEditForm } from "./ProfileEditForm";
import { UserData} from "./types";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user?.email) return;
        
        const userDetails = await getUserByEmail(user.email);
        const demographics = await getUserDemographicsByUserId(userDetails.id);
        setUserData({
          ...userDetails,
          ...demographics
        });
      } catch (error) {
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [user?.email]);

  const handleSave = async (formData: Omit<UserData, 'id' | 'created_at'>) => {
    try {
      if (!userData?.id) throw new Error("User ID not found");

      await updateUserDemographicsByUserId(userData.id, {
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        religion: formData.religion,
        address: formData.address,
      });
      
      // Refresh user data
      const userDetails = await getUserByEmail(user?.email || "");
      const demographics = await getUserDemographicsByUserId(userDetails.id);
      setUserData({
        ...userDetails,
        ...demographics
      });
      
      setIsEditing(false);
    } catch (error) {
      throw new Error("Failed to update profile");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        {isEditing ? (
          <ProfileEditForm
            userData={userData}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ProfileDisplay
            userData={userData}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;