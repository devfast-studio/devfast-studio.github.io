'use client';

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 md:p-6">
      <div className="text-2xl font-bold text-navy-900">FitGym</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-navy-900 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-navy-900 hover:text-blue-600">
          About Us
        </a>
        <a href="#" className="text-navy-900 hover:text-blue-600">
          Classes
        </a>
        <a href="#" className="text-navy-900 hover:text-blue-600">
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-3 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md md:hidden">
          <a
            href="#"
            className="block px-9 py-2 text-navy-900 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-9 py-2 text-navy-900 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href="#"
            className="block px-9 py-2 text-navy-900 hover:bg-gray-100"
          >
            Classes
          </a>
          <a
            href="#"
            className="block px-9 py-2 text-navy-900 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
