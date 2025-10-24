// src/components/Hero.jsx
import React, { useState } from "react";
import useTitleRotator from "../hooks/useTitleRotator";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Send, Code } from "lucide-react";
import assets from "../assets/assets";
import { useTheme } from "../hooks/useTheme";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const Hero = () => {
  const { theme } = useTheme();
  const { currentTitle, isFadingOut } = useTitleRotator();
  const isDesktop = useMediaQuery(theme.breakpoints.lg);

  const [viewWorkHover, viewWorkProps] = useHover();
  const [getInTouchHover, getInTouchProps] = useHover();

  const styles = {
    section: {
      position: "relative",
      padding: "5rem 1.5rem 7rem 1.5rem",
      overflow: "hidden",
      backgroundColor: theme.colors.background,
      transition: theme.transition,
    },
    blob1: {
      position: "absolute",
      top: "-5rem",
      right: "-5rem",
      width: "18rem",
      height: "18rem",
      backgroundColor:
        theme.mode === "light"
          ? "rgba(255, 215, 64, 0.3)"
          : "rgba(255, 215, 64, 0.1)",
      borderRadius: "9999px",
      mixBlendMode: "multiply",
      filter: "blur(3rem)",
      opacity: 0.5,
      animation: "blob-move 7s infinite alternate",
    },
    blob2: {
      position: "absolute",
      bottom: "-5rem",
      left: "-5rem",
      width: "20rem",
      height: "20rem",
      backgroundColor:
        theme.mode === "light"
          ? "rgba(68, 138, 255, 0.3)"
          : "rgba(68, 138, 255, 0.1)",
      borderRadius: "9999px",
      mixBlendMode: "multiply",
      filter: "blur(3rem)",
      opacity: 0.5,
      animation: "blob-move 10s infinite alternate-reverse",
    },
    container: {
      maxWidth: "72rem",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
      display: "flex",
      flexDirection: isDesktop ? "row" : "column-reverse",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
    content: {
      width: isDesktop ? "50%" : "100%",
      textAlign: isDesktop ? "left" : "center",
      marginTop: isDesktop ? 0 : "3rem",
    },
    title: {
      fontSize: isDesktop ? "3.75rem" : "3rem",
      fontWeight: "900",
      lineHeight: 1.2,
      marginBottom: "1rem",
      color: theme.colors.textPrimary,
      fontFamily: theme.fonts.heading,
    },
    animatedTitleWrapper: { height: "2.5rem", marginBottom: "1.5rem" },
    animatedTitle: {
      fontSize: "1.875rem",
      fontWeight: "600",
      color: theme.colors.accentDark,
      opacity: isFadingOut ? 0 : 1,
      transition: "opacity 0.5s ease-in-out",
      fontFamily: theme.fonts.heading,
    },
    subtitle: {
      fontSize: "1.25rem",
      color: theme.colors.textSecondary,
      maxWidth: "32rem",
      margin: isDesktop ? "0 0 2rem 0" : "0 auto 2rem auto",
      lineHeight: 1.6,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      justifyContent: isDesktop ? "flex-start" : "center",
      gap: "1rem",
    },
    buttonBase: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      fontWeight: "600",
      transition: theme.transition,
      textDecoration: "none",
      border: "2px solid transparent",
      cursor: "pointer",
      fontFamily: theme.fonts.sans,
    },
    buttonPrimary: {
      backgroundColor: theme.colors.accentPrimary,
      color: theme.colors.textDark,
      boxShadow: theme.shadows.cardSoft,
    },
    buttonPrimaryHover: {
      backgroundColor: theme.colors.accentDark,
      boxShadow: theme.shadows.cardHover,
      transform: "translateY(-2px)",
    },
    buttonSecondary: {
      backgroundColor: "transparent",
      color: theme.colors.accentPrimary,
      borderColor: theme.colors.accentPrimary,
    },
    buttonSecondaryHover: {
      backgroundColor: theme.colors.accentPrimary,
      color: theme.colors.textDark,
      transform: "translateY(-2px)",
    },
    illustrationContainer: {
      width: isDesktop ? "50%" : "100%",
      display: "flex",
      justifyContent: isDesktop ? "flex-end" : "center",
    },
    illustration: { width: "100%", maxWidth: isDesktop ? "32rem" : "24rem" },
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Jimutha Ranawaka</h1>
          <div style={styles.animatedTitleWrapper}>
            <h2 style={styles.animatedTitle}>{currentTitle}</h2>
          </div>
          <p style={styles.subtitle}>
            Crafting intuitive & high-performance digital solutions across the
            stack.
          </p>
          <div style={styles.buttonContainer}>
            <a
              href="#projects"
              style={{
                ...styles.buttonBase,
                ...styles.buttonPrimary,
                ...(viewWorkHover ? styles.buttonPrimaryHover : {}),
              }}
              {...viewWorkProps}
            >
              <Code size={20} />
              <span>View My Work</span>
            </a>
            <a
              href="#contact"
              style={{
                ...styles.buttonBase,
                ...styles.buttonSecondary,
                ...(getInTouchHover ? styles.buttonSecondaryHover : {}),
              }}
              {...getInTouchProps}
            >
              <Send size={20} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
        <div style={styles.illustrationContainer}>
          <img
            src={assets.heroIllustration}
            alt="Developer Illustration"
            style={styles.illustration}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
