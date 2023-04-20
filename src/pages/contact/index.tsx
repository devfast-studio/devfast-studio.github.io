import Layout from 'components/layout';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com',
    Icon: FaTwitter
  },
  {
    name: 'GitHub',
    link: 'https://github.com',
    Icon: FaGithub
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    Icon: FaLinkedin
  }
];

export default function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="contact-form">
          <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
          <form action="https://formspree.io/f/mnqyokqd" method="POST">
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded h-32"
                name="message"
              />
            </div>
            <button
              className="py-2 px-4 bg-orange text-white rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="text-2xl font-semibold mb-4">Contact info</h2>
          <p className="mb-4">Yeh Hsuan Ting</p>
          <p className="mb-4">Email: yeh@example.com</p>
          <p className="mb-4">Phone: +1 (123) 456-7890</p>
          <h3 className="text-xl font-semibold mb-2">Social Links</h3>
          <div className="flex space-x-4">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialLink.Icon className="text-orange" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
