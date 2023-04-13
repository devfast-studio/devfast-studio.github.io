import { useState } from 'react';
import Link from 'next/link';

export default function AnimatedButton(props: {
  label: string;
  href: string;
  className?: string;
}) {
  const { label, href, className = '' } = props;

  return (
    <div className="animate-pulse transition duration-300 ease-in-out transform hover:animate-bounce">
      <Link
        href={href}
        className={['rounded-md px-4 py-2', className].join(' ')}
      >
        {label}
      </Link>
    </div>
  );
}
