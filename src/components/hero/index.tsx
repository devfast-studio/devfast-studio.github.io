import React from 'react';
import ParticleBackground from './particleBackground';
import AnimatedText from './animatedText';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="relative h-[50vh] select-none">
        <Link href="/about">
          <ParticleBackground />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <AnimatedText
              className={[
                'mx-[5vw] md:mx-[10vw] leading-12',
                'text-[16px] md:text-[22px] text-center font-bold text-primary',
                'hover-orange'
              ]
                .join(' ')
                .trim()}
              phrases={[
                'First, solve the problem. Then, write the code.\n - John Johnson',
                'Do one thing and do it well.\n - Douglas McIlroy',
                'Simplicity is prerequisite for reliability.\n - Edsger W. Dijkstra',
                'Simplicity is the soul of efficiency.\n - Austin Freeman'
              ]}
              timeout={5000}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
