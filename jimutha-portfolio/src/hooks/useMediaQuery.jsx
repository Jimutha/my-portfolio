// src/hooks/useMediaQuery.jsx
import { useState, useEffect } from "react";

/**
 * Custom React Hook to detect if a media query is matched.
 * @param {string} query The media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} True if the media query matches, false otherwise.
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure window is defined (for server-side rendering, though not an issue here)
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);

    // Set the initial state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Create a listener
    const listener = () => {
      setMatches(media.matches);
    };

    // Add event listener
    media.addEventListener("change", listener);

    // Cleanup function
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};
