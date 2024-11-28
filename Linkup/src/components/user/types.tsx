// types.ts
export interface User {
    id: number;
    name: string;
    email: string;
    created_at?: string;
  }
  
  export interface UserDemographics {
    user_id: number;
    date_of_birth: string;
    gender: string;
    religion: string;
    address: string;
  }
  
  export interface UserData extends User, Omit<UserDemographics, 'user_id'> {}
  
  export interface ProfileDisplayProps {
    userData: UserData;
    onEdit: () => void;
  }
  
  export interface ProfileEditFormProps {
    userData: UserData;
    onSave: (data: Omit<UserData, 'id' | 'created_at'>) => Promise<void>;
    onCancel: () => void;
  }