// src/hooks/useTitleRotator.jsx
import { useState, useEffect } from "react";

// Your titles for the animation
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
      setIsFadingOut(true); // Start fading out

      // Wait for fade-out to finish, then change text and fade in
      setTimeout(() => {
        const nextIndex = (index + 1) % titles.length;
        setIndex(nextIndex);
        setCurrentTitle(titles[nextIndex]);
        setIsFadingOut(false); // Start fading in
      }, 500); // This 500ms MUST match the CSS transition duration
    }, interval); // How long each title stays visible

    return () => clearInterval(timer);
  }, [index, interval]);

  return { currentTitle, isFadingOut };
};

export default useTitleRotator;
