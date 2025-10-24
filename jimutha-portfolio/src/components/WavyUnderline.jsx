// src/components/WavyUnderline.jsx
import React from "react";
import { theme } from "../theme";

const WavyUnderline = () => {
  const styles = {
    underline: {
      height: "0.5rem", // 8px
      width: "6rem", // 96px
      backgroundRepeat: "repeat-x",
      backgroundSize: "20px 4px",
      // This SVG is URL-encoded. The stroke color %231DE9B6 is our accentPrimary
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'><path fill='none' stroke='${encodeURIComponent(
        theme.colors.accentPrimary
      )}' stroke-width='2' d='M0 3c5 0 5-2 10-2s5 2 10 2 5 0 5-2 10-2 10 2'/></svg>")`,
      // We get this animation from the <style> tag in App.jsx
      animation: "wavy 2s linear infinite",
    },
  };

  return <div style={styles.underline} />;
};

export default WavyUnderline;
