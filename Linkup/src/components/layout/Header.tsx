import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";

export function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold">{APP_NAME}</h1>
            </div>
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="#explore">Explore</Link>
            <Link to="#featured">Featured</Link>
            <Button onClick={handleCreateEventClick}>Create Event</Button>
            {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
          </nav>
        </div>
      </div>
    </header>
  );
}