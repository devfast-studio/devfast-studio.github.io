import React from 'react';
import Service from './service';
import PersonalInfo from './personalInfo';
import ContactButton from './contactButton';

export default function ProfileSection() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-12 bg-primary">
      <Service />
      <PersonalInfo />
      <ContactButton />
    </section>
  );
}
