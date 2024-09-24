import React from 'react';
import { EMAIL } from 'constants/config';

export const metadata = {
  title: 'Contact | 99LL Limited',
  description: '99LL Limited Contact Page'
};

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-12 md:items-center text-primary"
    >
      <div id="contact-form" className="w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-3xl font-semibold mb-8">Send a message</h2>
        <form
          action="https://formspree.io/f/mnnakbor"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              className="block text-sm font-medium text-secondary mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-3 border-2 border-primary rounded-md bg-secondary focus:outline-none focus:ring-orange-500 focus:border-orange-500 shadow-sm"
              name="email"
              type="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-secondary mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={[
                'shadow-sm h-[30vh] w-full p-3 bg-secondary border-2 border-primary rounded-md',
                'focus:outline-none focus:ring-orange-500 focus:border-orange-500'
              ]
                .join(' ')
                .trim()}
              name="message"
              required
            />
          </div>
          <div>
            <button className="w-full btn btn-accent" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div id="contact-info" className="w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-3xl font-semibold mb-8">Contact info</h2>
        <p className="text-lg mb-4 text-secondary">Wall Lee</p>
        <p className="text-lg mb-4 text-secondary">
          Email :{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-tertiary hover-orange hover:underline"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
