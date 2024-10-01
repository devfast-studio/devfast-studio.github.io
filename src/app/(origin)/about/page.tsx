/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About | 99LL Limited',
  description: '99LL Limited About Page'
};

export default function About() {
  return (
    <div id="about" className="bg-gray-900 text-gray-100">
      <section className="intro container layout">
        <h1 className="text-4xl font-bold mb-4 font-playfair">Hello World</h1>
        <p className="mb-2">
          I'm Wall Lee, representing DevFast Studio, a versatile development
          team based in Hong Kong. We specialize in full-stack web development,
          mobile app creation, and data collection.
        </p>
        <p className="mb-2">
          Since 2018, DevFast Studio has been professionally programming in the
          tech industry, working on a wide range of projects, from responsive
          web applications to cross-platform mobile apps.
        </p>
        <p>
          Our focus is on delivering high-quality, scalable solutions that
          combine technical expertise with user-friendly design.
        </p>
      </section>

      <section className="work-experience container layout mt-4">
        <h2 className="text-2xl font-bold mb-2 font-playfair">Work</h2>
        <p>
          At DevFast Studio, we offer services as{' '}
          <Link href="#" className="text-orange-500 hover-orange">
            Full Stack Developers
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-orange-500 hover-orange">
            App Developers
          </Link>
          , creating innovative digital solutions for clients across various
          industries.
        </p>
      </section>

      <section className="expertise container layout mt-4">
        <h2 className="text-2xl font-bold mb-2 font-playfair">Expertise</h2>
        <p className="mb-2">
          I specialize in full-stack web development, mobile app creation, and
          data collection. My technical skills include:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Web Development: React, Next.js, Node.js</li>
          <li>Mobile Development: Flutter, iOS, Android</li>
          <li>Programming Languages: Dart, JavaScript, TypeScript, Python</li>
          <li>Cloud & DevOps: Google Cloud Platform (GCP)</li>
          <li>Databases: MySQL, PostgreSQL</li>
          <li>Data Collection: Web scraping, Octoparse</li>
        </ul>
      </section>

      <section className="projects container layout mt-4">
        <h2 className="text-2xl font-bold mb-2 font-playfair">Projects</h2>
        <p className="mb-2">
          Throughout my career, I've worked on a variety of projects, including:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Cross-platform mobile applications using Flutter</li>
          <li>Responsive web applications with modern JavaScript frameworks</li>
          <li>Custom web scrapers for data collection and analysis</li>
          <li>
            Website maintenance and feature development for diverse clients
          </li>
        </ul>
        <p className="mt-4">
          If you're interested in collaborating on a project, feel free to reach
          out.
        </p>
      </section>

      <section className="contact container layout mt-4">
        <h2 className="text-2xl font-bold mb-2 font-playfair">Contact</h2>
        <p>
          You can reach DevFast Studio at{' '}
          <a
            href="mailto:wally08255@gmail.com"
            className="text-orange-500 hover-orange"
          >
            wally08255@gmail.com
          </a>{' '}
          or leave us a message{' '}
          <Link href="/contact" className="text-orange-500 hover-orange">
            here
          </Link>
          . We're always open to discussing new opportunities and exciting
          projects.
        </p>
      </section>
    </div>
  );
}
