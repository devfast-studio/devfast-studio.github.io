import Layout from 'components/layout';
import { SOCIAL_LINKS } from 'constants/config';
import React from 'react';
import { v4 as uuid } from 'uuid';

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
          <p className="mb-4">Email: notiger.yeh@gmail.com</p>
          <h3 className="text-xl font-semibold mb-2">Social Links</h3>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((socialLink) => {
              const { link, Icon } = socialLink;

              return (
                <a
                  key={uuid()}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="hover:text-orange-500" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
