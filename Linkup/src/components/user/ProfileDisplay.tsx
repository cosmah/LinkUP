// ProfileDisplay.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Edit } from "lucide-react";
import {  ProfileDisplayProps } from "./types";


export const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ userData, onEdit }) => {
  if (!userData) return null;

  return (
    <div className="space-y-6">
      <Card className="md:col-span-1">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/api/placeholder/150/150" />
              <AvatarFallback>
                {userData.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Full Name</h3>
              <p className="text-gray-600">{userData.name || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">{userData.email || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Date of Birth</h3>
              <p className="text-gray-600">{userData.date_of_birth || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Gender</h3>
              <p className="text-gray-600">{userData.gender || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Religion</h3>
              <p className="text-gray-600">{userData.religion || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">{userData.address || 'Not set'}</p>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={onEdit}>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
