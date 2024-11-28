import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/context/AuthContext';
import { getUserByEmail } from '../../../context/api'; // Import the getUserByEmail function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Call the getUserByEmail function to make an API request
      const user = await getUserByEmail(email);
      if (user && user.password === password) {
        login(email);
        navigate('/user-profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Failed to log in. Please try again.');
    }
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full px-6 py-12 md:px-0">
        <Card className="mx-auto max-w-[500px] w-full border-none shadow-xl bg-white/90 backdrop-blur">
          <CardHeader className="pb-8 pt-6">
            <CardTitle className="text-3xl font-bold text-center">Welcome Back</CardTitle>
          </CardHeader>

          {error && (
            <div className="px-6 pb-4">
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 text-lg"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>

            <CardFooter className="flex-col space-y-6 px-6 pb-8">
              <Button type="submit" className="w-full h-12 text-lg font-semibold">
                Sign In
              </Button>
              <div className="text-center text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="font-semibold text-primary hover:underline">
                  Register
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default Login;