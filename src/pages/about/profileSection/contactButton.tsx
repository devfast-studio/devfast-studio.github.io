import React from 'react';
import Link from 'next/link';

export default function ContactButton() {
  return (
    <div className="mt-12 text-center animate-pulse hover:animate-none">
      <Link
        className="bg-orange text-white rounded-md px-4 py-2 "
        href="/contact"
      >
        Reach Out to Me
      </Link>
    </div>
  );
}
