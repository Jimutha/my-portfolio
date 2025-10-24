// src/contexts/ThemeContext.jsx
import React, { useState, useMemo, useEffect } from "react";
import { getTheme } from "../theme";
import { ThemeContext } from "./ThemeContextDefinition";

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark"); // Default dark

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.textPrimary;
    document.body.style.transition =
      "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
