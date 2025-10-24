// src/theme.js

const lightTheme = {
  colors: {
    background: "#F8F9FA",
    textPrimary: "#212529",
    textSecondary: "#6c757d",
    accentPrimary: "#1DE9B6",
    accentDark: "#00BFA5",
    cardBg: "#FFFFFF",
    cardBg95: "rgba(255, 255, 255, 0.95)",
    borderLight: "#E9ECEF",
    borderGray: "#CED4DA",
    inputBg: "#F8F9FA",
    pillColors: [
      { bg: "#E0F7FA", text: "#00838F" },
      { bg: "#FFEBEE", text: "#D81B60" },
      { bg: "#E8F5E9", text: "#388E3C" },
      { bg: "#F3E5F5", text: "#7B1FA2" },
      { bg: "#FFF3E0", text: "#E65100" },
      { bg: "#E8EAF6", text: "#3949AB" },
    ],
  },
  shadows: {
    cardSoft: "0 10px 30px rgba(29, 233, 182, 0.15)",
    cardHover: "0 15px 40px rgba(29, 233, 182, 0.3)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  mode: "light",
};

const darkTheme = {
  colors: {
    background: "#121212",
    textPrimary: "#E0E0E0",
    textSecondary: "#A0A0A0",
    accentPrimary: "#1DE9B6",
    accentDark: "#00BFA5",
    cardBg: "#1E1E1E",
    cardBg95: "rgba(30, 30, 30, 0.95)",
    borderLight: "#333333",
    borderGray: "#555555",
    inputBg: "#2C2C2C",
    pillColors: [
      { bg: "rgba(29, 233, 182, 0.2)", text: "#1DE9B6" },
      { bg: "rgba(255, 64, 129, 0.2)", text: "#FF4081" },
      { bg: "rgba(100, 221, 23, 0.2)", text: "#76FF03" },
      { bg: "rgba(171, 71, 188, 0.2)", text: "#CE93D8" },
      { bg: "rgba(255, 167, 38, 0.2)", text: "#FFAB40" },
      { bg: "rgba(83, 109, 254, 0.2)", text: "#8C9EFF" },
    ],
  },
  shadows: {
    cardSoft: "0 10px 30px rgba(0, 0, 0, 0.3)",
    cardHover: "0 15px 40px rgba(0, 0, 0, 0.5)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
  },
  mode: "dark",
};

const commonTheme = {
  fonts: {
    sans: '"Inter", sans-serif',
    heading: '"Montserrat", sans-serif',
  },
  breakpoints: {
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  transition: "all 0.3s ease-in-out",
};

export const getTheme = (mode = "dark") => {
  // Default to dark
  const base = mode === "dark" ? darkTheme : lightTheme;
  return { ...commonTheme, ...base };
};
