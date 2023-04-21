import React from 'react';
import { v4 as uuid } from 'uuid';

const services = [
  {
    title: 'Software Solution',
    description: `Tailor-made web-based solutions leveraging full-stack development skills and ${
      new Date().getFullYear() - 2018
    }+ years of experience in the software industry. Focusing on cost-effective and flexible web applications that meet your company's unique needs.`
  },
  {
    title: 'Knowledge Sharing & Lifestyle',
    description:
      'Promoting the open-source philosophy and fostering a community where sharing knowledge contributes to a better and more innovative society.'
  },
  {
    title: 'Consultation',
    description:
      'Providing comprehensive analysis and guidance to navigate the complex challenges of software development. Ensuring cost-effective solutions that cater to your specific requirements.'
  }
];

export default function Service() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {services.map((service) => (
        <ServiceCard key={uuid()} {...service} />
      ))}
    </div>
  );
}

function ServiceCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
