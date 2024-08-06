import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons from v2

const Header = () => {
  const { isAuthenticated, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-gray-700 to-indigo-800 text-white shadow-lg">
      <nav className="container mx-auto py-4 px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link
              to="/"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              ToDo App
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {isAuthenticated && (
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-indigo-300 transition-colors duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-indigo-300 transition-colors duration-300"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mt-4 md:hidden space-y-4">
            <li>
              <Link
                to="/"
                className="block text-center hover:text-indigo-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block text-center hover:text-indigo-300 transition-colors duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block text-center hover:text-indigo-300 transition-colors duration-300"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
