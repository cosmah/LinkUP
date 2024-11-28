// src/context/api.d.ts

export declare const createUser: (userData: { name: string; email: string; password: string }) => Promise<any>;
export declare const getUserByEmail: (email: string) => Promise<any>;
export declare const createUserDemographics: (demographicsData: { user_id: number; date_of_birth: string; gender: string; religion: string; address: string }) => Promise<any>;
export declare const getUserDemographicsByUserId: (userId: number) => Promise<any>;
export declare const updateUserDemographicsByUserId: (userId: number, demographicsData: { date_of_birth: string; gender: string; religion: string; address: string }) => Promise<any>;
export declare const deleteUserDemographicsByUserId: (userId: number) => Promise<void>;