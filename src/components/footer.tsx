import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialIconProps {
  link: string;
  Icon: React.FC;
}

export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 text-gray">
          <SocialIcon link="https://twitter.com" Icon={FaTwitter} />
          <SocialIcon link="https://github.com" Icon={FaGithub} />
          <SocialIcon link="https://linkedin.com" Icon={FaLinkedin} />
        </div>
        <div className="text-sm text-gray">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ link, Icon }: SocialIconProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
}
