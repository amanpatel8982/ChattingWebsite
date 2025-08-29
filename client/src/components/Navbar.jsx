import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { user, isLogin } = useAuth();
  const [selectedTheme, setSelectedTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  );

  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    sessionStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if (location.pathname.slice(1) === "chat") {
      window.scrollTo({ top: 80, behavior: "smooth" });
    }
  }, [location]);

  return (
    <header
      className={`${
        location.pathname.slice(1) !== "chat" ? "sticky top-0 z-50" : ""
      } bg-primary text-primary-content shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-5xl font-extrabold tracking-wide">ChatApp</span>
        </Link>

        {/* Links */}
        <nav className="flex gap-8 items-center text-lg font-medium">
          {["Home", "About", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {isLogin && user ? (
            <>
              <Link
                to="/chat"
                className="relative group"
              >
                <span className="transition">Chat</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/dashboard" className="flex gap-3 items-center">
                <img
                  src={user.photo}
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-secondary"
                />
                <span className="font-semibold">{user.fullName.split(" ")[0]}</span>
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 bg-secondary text-secondary-content rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Login
            </Link>
          )}

          {/* Theme switcher */}
          <div className="flex items-center gap-2 ml-3">
            <select
              name="theme"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="select select-bordered border-secondary bg-base-100 text-base-content w-32"
            >
              <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="pastel">Pastel</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="spotify">Spotify</option>
            <option value="valorant">Valorant</option>
            <option value="vscode">VS Code</option>
            </select>
            {selectedTheme === "light" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
