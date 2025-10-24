// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { theme } from "../theme";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Reusable hook for hover states
const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.md);

  // Hover states for links
  const [aboutHover, aboutProps] = useHover();
  const [workHover, workProps] = useHover();
  const [contactHover, contactProps] = useHover();

  const navItems = [
    { name: "About", href: "#about", isHovered: aboutHover, props: aboutProps },
    { name: "Work", href: "#projects", isHovered: workHover, props: workProps },
    {
      name: "Contact",
      href: "#contact",
      isHovered: contactHover,
      props: contactProps,
    },
  ];

  const styles = {
    headerWrapper: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      backgroundColor: theme.colors.cardBg95,
      backdropFilter: "blur(4px)",
      boxShadow: theme.shadows.small,
      borderBottom: `1px solid ${theme.colors.borderLight}`,
    },
    navContainer: {
      maxWidth: "72rem",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 1.5rem",
    },
    logoLink: {
      fontFamily: theme.fonts.heading,
      fontSize: "1.5rem",
      fontWeight: "700",
      color: theme.colors.accentDark,
      textDecoration: "none",
      letterSpacing: "0.5px",
    },
    desktopNav: {
      display: "flex",
      gap: "1.5rem",
    },
    navLinkBase: {
      fontWeight: "500",
      color: theme.colors.textDark,
      transition: "color 0.15s ease",
      textDecoration: "none",
    },
    navLinkHover: {
      color: theme.colors.accentPrimary,
    },
    mobileMenuButton: {
      background: "none",
      border: "none",
      color: theme.colors.textDark,
      cursor: "pointer",
    },
    mobileNav: {
      position: "absolute",
      width: "100%",
      backgroundColor: theme.colors.cardBg,
      boxShadow: theme.shadows.small,
      borderTop: `1px solid ${theme.colors.borderLight}`,
      transition: "all 0.3s ease-in-out",
      maxHeight: isOpen ? "20rem" : "0",
      opacity: isOpen ? 1 : 0,
      overflow: "hidden",
      zIndex: 40,
    },
    mobileNavLink: {
      display: "block",
      padding: "0.75rem 1.5rem",
      color: theme.colors.textDark,
      textDecoration: "none",
    },
  };

  return (
    <header style={styles.headerWrapper}>
      <div style={styles.navContainer}>
        <a href="#hero" style={styles.logoLink}>
          Jimutha Ranawaka
        </a>

        {isDesktop ? (
          <nav style={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  ...styles.navLinkBase,
                  ...(item.isHovered ? styles.navLinkHover : {}),
                }}
                {...item.props}
              >
                {item.name}
              </a>
            ))}
          </nav>
        ) : (
          <button
            style={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {!isDesktop && (
        <nav style={styles.mobileNav}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={styles.mobileNavLink}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
