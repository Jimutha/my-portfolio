// src/theme.js
// This is our new "tailwind.config.js", but for inline styles.
// All components will import this file for consistent styling.

export const theme = {
  colors: {
    baseLight: "#F8F9FA",
    textDark: "#212529",
    textLight: "#6c757d",

    accentPrimary: "#1DE9B6",
    accentDark: "#00BFA5",

    brandBlue: "#448AFF",
    brandYellow: "#FFD740",
    brandPink: "#FF4081",
    brandPurple: "#AB47BC",
    brandOrange: "#E65100",
    brandIndigo: "#3949AB",

    cardBg: "#FFFFFF",
    cardBg95: "rgba(255, 255, 255, 0.95)",
    borderLight: "#E9ECEF",
    borderGray: "#CED4DA",

    pillColors: [
      { bg: "#E0F7FA", text: "#00838F" }, // Teal
      { bg: "#FFEBEE", text: "#D81B60" }, // Pink
      { bg: "#E8F5E9", text: "#388E3C" }, // Green
      { bg: "#F3E5F5", text: "#7B1FA2" }, // Purple
      { bg: "#FFF3E0", text: "#E65100" }, // Orange
      { bg: "#E8EAF6", text: "#3949AB" }, // Indigo
    ],
  },
  fonts: {
    sans: '"Inter", sans-serif',
    heading: '"Montserrat", sans-serif',
  },
  shadows: {
    cardSoft: "0 10px 30px rgba(29, 233, 182, 0.15)",
    cardHover: "0 15px 40px rgba(29, 233, 182, 0.3)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  // We define breakpoints for our media query hook
  breakpoints: {
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  // Common transition
  transition: "all 0.3s ease-in-out",
};
