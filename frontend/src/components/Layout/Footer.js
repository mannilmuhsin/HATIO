// src/components/Layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-300"
          >
            Todo App
          </Link>
          <p className="mt-2 text-center md:text-left text-gray-400">
            Simplifying your daily tasks.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <h5 className="font-semibold text-white">Quick Links</h5>
            <Link
              to="/about"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-1">
            <h5 className="font-semibold text-white">Support</h5>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/help"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Help Center
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2024 Todo App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
