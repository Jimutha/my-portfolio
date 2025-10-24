// src/components/WavyUnderline.jsx
import React from "react";
import { useTheme } from "../hooks/useTheme";

const WavyUnderline = () => {
  const { theme } = useTheme();

  const styles = {
    underline: {
      height: "0.5rem",
      width: "6rem",
      backgroundRepeat: "repeat-x",
      backgroundSize: "20px 4px",
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'><path fill='none' stroke='${encodeURIComponent(
        theme.colors.accentPrimary
      )}' stroke-width='2' d='M0 3c5 0 5-2 10-2s5 2 10 2 5 0 5-2 10-2 10 2'/></svg>")`,
      animation: "wavy 2s linear infinite",
    },
  };

  return <div style={styles.underline} />;
};

export default WavyUnderline;
