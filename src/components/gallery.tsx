import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DEMO_DATA = [
  {
    title: 'Company Landing Page',
    href: '/demo/company-landing',
    imgSrc: 'https://placehold.co/600x400?text=Company+Landing'
  },
  {
    title: 'Personal Blog Page',
    href: '/demo/personal-blog',
    imgSrc: 'https://placehold.co/600x400?text=Personal+Blog'
  }
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2 className="text-2xl text-left font-bold mb-[30px]">Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {DEMO_DATA.map((demo) => (
          <Link key={demo.href} href={demo.href}>
            <div className="flex flex-col">
              <h3 className="mb-2">{demo.title}</h3>
              <div className="relative w-full h-0 pb-[66.67%]">
                <Image
                  src={demo.imgSrc}
                  alt={demo.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
