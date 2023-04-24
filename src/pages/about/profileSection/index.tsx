import React from 'react';
import Service from './service';
import PersonalInfo from './personalInfo';
import ContactButton from './contactButton';

export default function ProfileSection() {
  return (
    <section className="py-6 md:py-12">
      <Service />
      <PersonalInfo />
      <ContactButton />
    </section>
  );
}
