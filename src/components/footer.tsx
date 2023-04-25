import React from 'react';
import SocialIcon from 'components/socialIcon';
import { SOCIAL_LINKS } from 'constants/config';
import { v4 as uuid } from 'uuid';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 text-gray">
          {SOCIAL_LINKS.map((socialLink) => (
            <SocialIcon
              key={uuid()}
              link={socialLink.link}
              Icon={socialLink.Icon}
            />
          ))}
        </div>
        <div className="text-sm text-gray">
          &copy; {new Date().getFullYear()} Code Tiger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
