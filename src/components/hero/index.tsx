import React from 'react';
import ParticleBackground from './particleBackground';
import AnimatedText from './animatedText';
import LearnMoreButton from './learnMoreButton';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[50vh] select-none">
      <ParticleBackground />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <AnimatedText
          className="text-[20px] md:text-[33px] text-center font-bold text-gray-800 mx-[5vw] md:mx-[10vw] leading-12"
          phrases={[
            'First, solve the problem. Then, write the code.\n - John Johnson',
            'Do one thing and do it well.\n - Douglas McIlroy',
            'Simplicity is prerequisite for reliability.\n - Edsger W. Dijkstra',
            'Simplicity is the soul of efficiency.\n - Austin Freeman'
          ]}
          timeout={5000}
        />
        <LearnMoreButton
          href="/about"
          label="Learn more"
          className="mt-10 bg-orange-400 text-white"
        />
      </div>
    </section>
  );
}
