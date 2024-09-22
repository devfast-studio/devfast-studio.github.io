'use client';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * AnimatedText
 * @param phrases - An array of phrases to be animated. There should be at least 2 phrases.
 * @returns A React component that animates the phrases.
 */
export default function AnimatedText(props: {
  phrases?: string[];
  className?: string;
  duration?: number;
  timeout?: number;
}) {
  const { phrases = [], className = '', duration = 3, timeout = 4000 } = props;

  const [activeIndex, setActiveIndex] = useState(1);
  const [startAnimation, setStartAnimation] = useState(false);

  function handlePlaceHolderAnimationend() {
    setStartAnimation(true);
  }

  function handleAnimationend(e: React.AnimationEvent<HTMLParagraphElement>) {
    const currentTarget = e.currentTarget;

    if (currentTarget.classList.contains('animate__fadeOut')) {
      setActiveIndex((activeIndex + 1) % phrases.length);
    } else {
      setTimeout(() => {
        if (currentTarget) {
          currentTarget.classList.remove('animate__fadeIn');
          currentTarget.classList.add('animate__fadeOut');
        }
      }, timeout);
    }
  }

  if (phrases.length <= 1) {
    return null;
  }

  if (startAnimation) {
    return (
      <>
        {phrases.map((phrase, index) => {
          if (index === activeIndex) {
            return (
              <div
                key={uuid()}
                style={
                  {
                    '--animate-duration': `${duration}s`
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
                className={[
                  'animate__animated animate__fadeIn',
                  className
                ].join(' ')}
                onAnimationEnd={handleAnimationend}
              >
                {phrase.split('\n').map((line) => (
                  <p key={uuid()}>{line}</p>
                ))}
              </div>
            );
          }
        })}
      </>
    );
  }

  return (
    <div
      style={{
        animationDelay: '2s'
      }}
      className={['animate__animated animate__fadeOut', className].join(' ')}
      onAnimationEnd={handlePlaceHolderAnimationend}
    >
      {phrases[0].split('\n').map((line) => (
        <p key={uuid()}>{line}</p>
      ))}
    </div>
  );
}
