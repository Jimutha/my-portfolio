// src/hooks/useTitleRotator.jsx
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "UX/UI Designer",
  "Frontend Developer",
  "Mobile Application Developer",
  "Professional Cricketer",
];

const useTitleRotator = (interval = 3500) => {
  const [index, setIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[index]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        const nextIndex = (index + 1) % titles.length;
        setIndex(nextIndex);
        setCurrentTitle(titles[nextIndex]);
        setIsFadingOut(false);
      }, 500);
    }, interval);
    return () => clearInterval(timer);
  }, [index, interval]);

  return { currentTitle, isFadingOut };
};

export default useTitleRotator;
