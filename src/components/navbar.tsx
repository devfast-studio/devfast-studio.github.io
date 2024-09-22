'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { LogoIcon } from './icons';
import { v4 as uuid } from 'uuid';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleMenuClick() {
    setOpen(!open);
  }

  return (
    <nav className="bg-white shadow relative z-10">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" passHref>
            <span className="flex items-center text-2xl font-semibold cursor-pointer">
              <LogoIcon />
            </span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span className="hover:text-orange cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <Menu as="div" className="md:hidden">
            <Menu.Button
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-orange focus:outline-none"
              onClick={handleMenuClick}
            >
              <span className="sr-only">Open main menu</span>
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Menu.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition-opacity ease-in duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items
                className="absolute w-full right-0 mt-2 z-10 bg-white rounded-md shadow-lg ring-1 ring-[#222222] ring-opacity-5 focus:outline-none"
                static
              >
                <div className="px-1 py-1">
                  {navItems.map((item) => (
                    <Menu.Item key={uuid()}>
                      {({ active }) => (
                        <Link href={item.href} passHref>
                          <span
                            className={`${
                              active ? 'text-white bg-orange' : 'text-black'
                            } group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
