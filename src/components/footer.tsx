import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@radix-ui/react-popover';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialIconProps {
  link: string;
  Icon: React.FC;
}

interface SocialIconWithPopoverProps extends SocialIconProps {
  label: string;
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 flex flex-col">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex space-x-4">
            <SocialIconWithPopover
              link="https://twitter.com"
              Icon={FaTwitter}
              label="Follow me on Twitter"
            />
            <SocialIconWithPopover
              link="https://github.com"
              Icon={FaGithub}
              label="Check out my GitHub"
            />
            <SocialIconWithPopover
              link="https://linkedin.com"
              Icon={FaLinkedin}
              label="Connect with me on LinkedIn"
            />
          </div>
        </div>
      </div>
      <div className="mt-auto text-center text-sm text-gray-600 py-4">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}

function SocialIconWithPopover({
  link,
  Icon,
  label
}: SocialIconWithPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <SocialIcon link={link} Icon={Icon} />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        className="rounded-md shadow-lg bg-white p-2"
      >
        {label}
      </PopoverContent>
    </Popover>
  );
}

function SocialIcon({ link, Icon }: SocialIconProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="text-xl" />
    </a>
  );
}
