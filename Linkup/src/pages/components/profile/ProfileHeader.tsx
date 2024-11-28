import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
      <div className="relative">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=128`}
          alt={name}
          className="w-32 h-32 rounded-full"
        />
        <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <Camera className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};