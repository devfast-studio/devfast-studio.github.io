'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LogoIcon } from './icons';
import Layout from './layout';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpend] = useState(false);

  function toggleMenu() {
    setIsOpend(!isOpen);
  }

  function handleLinkClick() {
    setIsOpend(false);
  }

  return (
    <nav className="bg-secondary">
      <Layout className=" text-primary shadow relative z-10 py-1">
        <div className="flex items-center justify-between py-1">
          <Link href="/" passHref>
            <span className="flex items-center text-2xl font-semibold cursor-pointer ml-[-10px]">
              <LogoIcon />
            </span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span className="hover-orange cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <button
            className={[
              'md:hidden p-2 rounded-md focus:outline-none',
              'hover-orange'
            ]
              .join(' ')
              .trim()}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          ]
            .join(' ')
            .trim()}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-1 py-2 rounded-md text-base font-medium hover-orange"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </nav>
  );
}
