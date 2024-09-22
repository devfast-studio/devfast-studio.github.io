import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray">
          &copy; {new Date().getFullYear()} <strong>99LL Limited</strong> All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
