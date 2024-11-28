// ProfileEditForm.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ProfileEditFormProps, UserData } from "./types";

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ 
  userData, 
  onSave, 
  onCancel 
}) => {
  const [formData, setFormData] = useState<Omit<UserData, 'id' | 'created_at'>>({
    name: userData?.name || "",
    email: userData?.email || "",
    date_of_birth: userData?.date_of_birth || "",
    gender: userData?.gender || "",
    religion: userData?.religion || "",
    address: userData?.address || "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (userData) {
        // Update existing user
        await fetch(`/api/user-demographics/${userData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } else {
        // Create new user
        await fetch('/api/user-demographics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }
      onSave(formData);
    } catch (error) {
      setError("An error occurred while saving the data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Name</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Label>Email</Label>
          <Input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Label>Date of Birth</Label>
          <Input
            value={formData.date_of_birth}
            onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
          />
          <Label>Gender</Label>
          <Input
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          />
          <Label>Religion</Label>
          <Input
            value={formData.religion}
            onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
          />
          <Label>Address</Label>
          <Input
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </CardContent>
        <CardFooter>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onCancel}>Cancel</Button>
        </CardFooter>
      </Card>
      {error && (
        <Alert>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
};