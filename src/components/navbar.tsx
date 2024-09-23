'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { LogoIcon } from './icons';
import { v4 as uuid } from 'uuid';
import Layout from './layout';

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

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav>
      <Layout className="bg-gray-100 shadow relative z-10 py-1">
        <div className="flex items-center justify-between py-1">
          <Link href="/" passHref>
            <span className="flex items-center text-2xl font-semibold cursor-pointer ml-[-10px]">
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
              className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-orange focus:outline-none"
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
                className="absolute w-full right-0 mt-2 z-10 bg-gray-100 rounded-md shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none"
                static
              >
                <div className="px-4 py-2">
                  {navItems.map((item) => (
                    <Menu.Item key={uuid()}>
                      {() => (
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          passHref
                        >
                          <span
                            className={
                              'flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer text-gray-900'
                            }
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
      </Layout>
    </nav>
  );
}
