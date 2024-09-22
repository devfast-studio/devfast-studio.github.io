import React from 'react';
import { EMAIL } from 'constants/config';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="contact-form">
          <h2 className="text-3xl font-semibold mb-6">Send a message</h2>
          <form
            action="https://formspree.io/f/mnnakbor"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-sm"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 h-40 shadow-sm"
                name="message"
                required
              />
            </div>
            <div>
              <button
                className="w-full px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300 ease-in-out"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="text-3xl font-semibold mb-6">Contact info</h2>
          <p className="text-lg mb-4">Wall Lee</p>
          <p className="text-lg mb-4">
            Email:{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-700 hover:underline"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
