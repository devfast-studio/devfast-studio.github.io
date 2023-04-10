import { useState, ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Layout({
  children,
  title = '',
  description = ''
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Navbar />
      <header className="bg-white shadow">
        {title && (
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h1>
          </div>
        )}
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2021 Your Company Name
          </p>
        </div>
      </footer>
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav>
      {/* #region desktop view navbar content */}
      <div className="relative z-10 bg-white max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                width={40}
                height={40}
                className="block lg:hidden h-8 w-auto"
                alt="logo"
              />
              <Image
                className="hidden lg:block h-8 w-auto"
                width={40}
                height={40}
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="logo"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex">
              <Link href="/">Home</Link>
              <Link href="/profile">profile</Link>
            </div>
          </div>
          <div className="-ml-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              onClick={handleMobileMenuClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* #endregion */}

      {/* #region mobile view navbar content */}
      <div
        id="mobile-menu-content"
        className={`sm:hidden flex flex-col px-2 pt-2 pb-3 transition duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <Link href="/">Home</Link>
        <Link href="/profile">profile</Link>
      </div>
      {/* #endregion */}
    </nav>
  );
}
