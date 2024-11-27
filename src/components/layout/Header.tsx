import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">{APP_NAME}</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#explore">Explore</Link>
            <Link href="#featured">Featured</Link>
            <Button>Create Event</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}