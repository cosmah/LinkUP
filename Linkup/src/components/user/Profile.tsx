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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, User, Lock, Bell, Shield } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useMediaQuery } from 'react-responsive';

const Profile = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: user?.email || "john.doe@example.com",
    dob: "",
    gender: "",
    religion: "",
    address: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("Profile updated successfully");
  };

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className={`grid grid-cols-1 ${isDesktopOrLaptop ? 'md:grid-cols-4' : ''} gap-6`}>
          {/* Sidebar */}
          <Card className="md:col-span-1 h-fit">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/api/placeholder/150/150" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  <Camera className="w-4 h-4 mr-2" />
                  Change Photo
                </Button>
                <h3 className="text-xl font-semibold">{formData.name}</h3>
                <p className="text-sm text-gray-500">{formData.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="bg-white/50 backdrop-blur flex justify-center">
                <TabsTrigger value="profile">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>

                  {(error || success) && (
                    <div className="px-6">
                      <Alert variant={error ? "destructive" : "default"}>
                        <AlertDescription>{error || success}</AlertDescription>
                      </Alert>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select
                          id="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="h-12 w-full rounded-md border bg-background p-3"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="religion">Religion</Label>
                        <select
                          id="religion"
                          value={formData.religion}
                          onChange={handleChange}
                          className="h-12 w-full rounded-md border bg-background p-3"
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
                        <Label htmlFor="address">Address</Label>
                        <textarea
                          id="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full min-h-[100px] p-3 rounded-md border bg-background"
                          placeholder="Enter your address"
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setFormData({
                            name: "John Doe",
                            email: user?.email || "john.doe@example.com",
                            dob: "",
                            gender: "",
                            religion: "",
                            address: "",
                            password: "",
                            newPassword: "",
                            confirmPassword: "",
                          })
                        }
                      >
                        Reset
                      </Button>
                      <Button type="submit">Save Changes</Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="h-12"
                      />
                    </div>
                    <Button className="w-full">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;