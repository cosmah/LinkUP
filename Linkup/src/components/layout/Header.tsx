import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { User } from "lucide-react";

export function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Media query for mobile devices
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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

          {/* Hamburger Menu for Mobile */}
          {isMobile ? (
            <>
              <button
                className="text-primary focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? "✖" : "☰"}
              </button>
            </>
          ) : (
            <nav className="flex items-center gap-4">
              <Link to="#explore">Explore</Link>
              <Link to="#featured">Featured</Link>
              <Button onClick={handleCreateEventClick}>Create Event</Button>
              {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
            </nav>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="flex flex-col mt-4 space-y-2">
            <Link to="#explore" onClick={() => setIsMenuOpen(false)}>
              Explore
            </Link>
            <Link to="#featured" onClick={() => setIsMenuOpen(false)}>
              Featured
            </Link>
            <div className="flex items-center space-x-4">
              {isLoggedIn && (
                <Link to="/profile" className="w-full">
                  <Button className="w-full flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    User Profile
                  </Button>
                </Link>
              )}
              <Button onClick={handleCreateEventClick} className="w-full">
                Create Event
              </Button>
            </div>
            {isLoggedIn && (
              <Button onClick={handleLogout} className="w-full">
                Logout
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
