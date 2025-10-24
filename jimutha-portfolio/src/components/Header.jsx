// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import MobileNavLink from "./MobileNavLink";

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
  const { theme, mode, toggleTheme } = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.md);

  const [aboutHover, aboutProps] = useHover();
  const [workHover, workProps] = useHover();
  const [contactHover, contactProps] = useHover();
  const [themeToggleHover, themeToggleProps] = useHover();

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
      transition: theme.transition,
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
    navControls: { display: "flex", alignItems: "center", gap: "1.5rem" },
    desktopNav: { display: "flex", gap: "1.5rem" },
    navLinkBase: {
      fontWeight: "500",
      color: theme.colors.textPrimary,
      transition: "color 0.15s ease",
      textDecoration: "none",
    },
    navLinkHover: { color: theme.colors.accentPrimary },
    themeToggleButton: {
      background: "none",
      border: "none",
      padding: "0.25rem",
      cursor: "pointer",
      color: theme.colors.textSecondary,
      transition: "color 0.15s ease, transform 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    themeToggleButtonHover: {
      color: theme.colors.accentPrimary,
      transform: "rotate(15deg)",
    },
    mobileMenuButton: {
      background: "none",
      border: "none",
      color: theme.colors.textPrimary,
      cursor: "pointer",
      marginLeft: "1rem",
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
    mobileNavList: {
      display: "flex",
      flexDirection: "column",
      padding: "0.5rem",
      gap: "0.25rem",
    },
  };

  return (
    <header style={styles.headerWrapper}>
      <div style={styles.navContainer}>
        <a href="#hero" style={styles.logoLink}>
          Jimutha Ranawaka
        </a>

        {isDesktop ? (
          <div style={styles.navControls}>
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
            <button
              onClick={toggleTheme}
              style={{
                ...styles.themeToggleButton,
                ...(themeToggleHover ? styles.themeToggleButtonHover : {}),
              }}
              aria-label={`Switch to ${
                mode === "light" ? "dark" : "light"
              } mode`}
              {...themeToggleProps}
            >
              {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        ) : (
          <div style={styles.navControls}>
            <button
              onClick={toggleTheme}
              style={{
                ...styles.themeToggleButton,
                ...(themeToggleHover ? styles.themeToggleButtonHover : {}),
              }}
              aria-label={`Switch to ${
                mode === "light" ? "dark" : "light"
              } mode`}
              {...themeToggleProps}
            >
              {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              style={styles.mobileMenuButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {!isDesktop && (
        <nav style={styles.mobileNav}>
          <div style={styles.mobileNavList}>
            {navItems.map((item) => (
              <MobileNavLink
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
