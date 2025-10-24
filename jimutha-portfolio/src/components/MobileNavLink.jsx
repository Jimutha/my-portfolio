// src/components/MobileNavLink.jsx
import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const MobileNavLink = ({ href, children, onClick }) => {
  const { theme } = useTheme();
  const [isHovered, hoverProps] = useHover();

  const styles = {
    link: {
      display: "block",
      padding: "0.75rem 1.5rem",
      color: theme.colors.textPrimary,
      textDecoration: "none",
      backgroundColor: isHovered ? theme.colors.background : "transparent",
      borderRadius: "0.375rem",
      transition: "background-color 0.15s ease",
    },
  };

  return (
    <a href={href} style={styles.link} onClick={onClick} {...hoverProps}>
      {children}
    </a>
  );
};

export default MobileNavLink;
