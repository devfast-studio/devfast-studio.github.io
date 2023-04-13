import { useState, ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

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
      <main className="max-w-4xl">{children}</main>
      <Footer />
    </div>
  );
}
