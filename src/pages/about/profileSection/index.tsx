import React from 'react';
import Service from './service';
import PersonalInfo from './personalInfo';
import ContactButton from './contactButton';

function ProfileSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-24 bg-primary">
      <Service />
      <PersonalInfo />
      <ContactButton />
    </section>
  );
}

export default ProfileSection;
