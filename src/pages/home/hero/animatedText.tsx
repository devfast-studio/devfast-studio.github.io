import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';

export default function AnimatedText(props: { phrases: string[] }) {
  const { phrases } = props;

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
      }, 2000);
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
              <p
                key={uuid()}
                style={{
                  '--animate-duration': '3s'
                }}
                className="animate__animated animate__fadeIn"
                onAnimationEnd={handleAnimationend}
              >
                {phrase}
              </p>
            );
          }
        })}
      </>
    );
  }

  return (
    <p
      style={{
        'animation-delay': '2s'
      }}
      className="animate__animated animate__fadeOut"
      onAnimationEnd={handlePlaceHolderAnimationend}
    >
      {phrases[0]}
    </p>
  );
}
