import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

const Character: React.FC<CharProps> = ({ char, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none pointer-events-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalLength = text.length;
  const words = text.split(' ');

  let runningIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordElement = (
          <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const charIndex = runningIndex + charIdx;
              const start = charIndex / totalLength;
              const end = (charIndex + 1) / totalLength;
              return (
                <Character
                  key={`char-${charIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </span>
        );

        runningIndex += wordChars.length;

        // If not the last word, add the space
        const spaceElement = wordIdx < words.length - 1 ? (
          <Character
            key={`space-${runningIndex}`}
            char=" "
            progress={scrollYProgress}
            start={runningIndex / totalLength}
            end={(runningIndex + 1) / totalLength}
          />
        ) : null;

        if (wordIdx < words.length - 1) {
          runningIndex += 1;
        }

        return (
          <React.Fragment key={`frag-${wordIdx}`}>
            {wordElement}
            {spaceElement}
          </React.Fragment>
        );
      })}
    </p>
  );
};
