import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className="text-5xl font-bold text-white mb-4">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypewriterText;
