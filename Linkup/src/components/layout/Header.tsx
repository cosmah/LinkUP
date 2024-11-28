import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, User } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCreateEventClick = () => {
    if (isLoggedIn) {
      navigate("/user-profile");
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

  const handleNavigate = (path: string) => {
    navigate(path);
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
              <Button onClick={() => handleNavigate("/#explore")}>Explore</Button>
              <Button onClick={() => handleNavigate("/#featured")}>Featured</Button>
              <Button onClick={handleCreateEventClick}>User Profile</Button>
              {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
            </nav>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="flex flex-col mt-4 space-y-2">
            <Button onClick={() => { handleNavigate("/#explore"); setIsMenuOpen(false); }}>
              Explore
            </Button>
            <Button onClick={() => { handleNavigate("/#featured"); setIsMenuOpen(false); }}>
              Featured
            </Button>
            <div className="flex items-center space-x-4">
              {isLoggedIn && (
                <Button onClick={() => { handleNavigate("/user-profile"); setIsMenuOpen(false); }} className="w-full flex items-center justify-center">
                  <User className="w-4 h-4 mr-2" />
                  User Profile
                </Button>
              )}
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