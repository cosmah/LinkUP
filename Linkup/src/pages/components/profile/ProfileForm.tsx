import React from 'react';
import { ProfileFormData } from '../../../types/user';

interface ProfileFormProps {
  formData: ProfileFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
  success?: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  formData,
  onChange,
  onSubmit,
  error,
  success,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          className="w-full p-2 border rounded-md"
          disabled
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={onChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
          onChange={onChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
          Religion
        </label>
        <select
          id="religion"
          value={formData.religion}
          onChange={onChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Religion</option>
          <option value="catholic">Catholic</option>
          <option value="anglican">Anglican</option>
          <option value="islam">Islam</option>
          <option value="orthodox">Orthodox</option>
          <option value="adventist">Adventist</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          value={formData.address}
          onChange={onChange}
          className="w-full p-2 border rounded-md min-h-[100px]"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};