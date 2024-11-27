import { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from '@/components/ui/alert';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation
    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }

    // Mock update logic
    setSuccess('Profile updated successfully');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-semibold">User Profile</h2>
        </CardHeader>
        <CardContent>
          {error && <Alert variant="destructive">{error}</Alert>}
          {success && <Alert variant="default">{success}</Alert>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full"
                placeholder="Leave blank to keep current password"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white">Update Profile</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-muted-foreground">
            Want to change your password? <a href="/change-password" className="text-primary">Change Password</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;