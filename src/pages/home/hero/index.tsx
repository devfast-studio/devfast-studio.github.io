// Import necessary libraries and components
import React from 'react';
import ParticleBackground from './particleBackground';
import AnimatedText from './animatedText';
// import AnimatedText from './AnimatedText';
// import AnimatedCTA from './AnimatedCTA';

// component: Hero
// props: none
// state: none
// functions: none
// effects: none
// callbacks: none
const Hero = () => {
  return (
    <section id="hero" className="relative w-screen h-[50vh]">
      {/* Uncomment the following lines after implementing the missing components */}
      <ParticleBackground />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <AnimatedText phrases={['Hello,', 'Welcome,', 'Hi,']} />
        <span> {"I'm Yeh Hsuan Ting, a web developer."}</span>
      </div>
      {/* <AnimatedCTA text="Learn more" href="/about" /> */}
    </section>
  );
};

export default Hero;
