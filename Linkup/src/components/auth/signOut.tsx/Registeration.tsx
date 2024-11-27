import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from '@/components/ui/alert';

const Registeration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock signup logic
    if (email === 'user@example.com') {
      setError('Email already in use');
    } else {
      navigate('/profile'); // Redirect to dashboard on successful signup
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
        </CardHeader>
        <CardContent>
          {error && <Alert variant="destructive">{error}</Alert>}
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
                required
                className="mt-1 w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account? <a href="/login" className="text-primary">Login</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Registeration;