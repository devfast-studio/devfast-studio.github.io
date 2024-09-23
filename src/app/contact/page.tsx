import React from 'react';
import { EMAIL } from 'constants/config';

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-12 md:items-center">
      <div id="contact-form" className="w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-3xl font-semibold mb-8">Send a message</h2>
        <form
          action="https://formspree.io/f/mnnakbor"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-900 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={[
                'w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 shadow-sm',
                'bg-gray-100'
              ]
                .join(' ')
                .trim()}
              name="email"
              type="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-900 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={[
                'w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 shadow-sm',
                'bg-gray-100',
                'h-[30vh]'
              ]
                .join(' ')
                .trim()}
              name="message"
              required
            />
          </div>
          <div>
            <button
              className="w-full px-6 py-3 bg-gray-100 text-white rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div id="contact-info" className="w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-3xl font-semibold mb-8">Contact info</h2>
        <p className="text-lg mb-4">Wall Lee</p>
        <p className="text-lg mb-4">
          Email :{' '}
          <a href={`mailto:${EMAIL}`} className="text-gray-900 hover:underline">
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
