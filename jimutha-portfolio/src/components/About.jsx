// src/components/About.jsx
import React, { useState } from "react";
import { Download } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import assets from "../assets/assets";
import WavyUnderline from "./WavyUnderline";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const About = () => {
  const { theme } = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.lg);
  const [resumeHover, resumeProps] = useHover();

  const coreSkills = [
    "React / React Native",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "UX/UI Design",
    "Agile Leadership",
    "Full-Stack Development",
  ];

  const styles = {
    section: { padding: "6rem 0" },
    container: {
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      alignItems: "flex-start",
      gap: isDesktop ? "4rem" : "3rem",
    },
    leftColumn: {
      width: isDesktop ? "33.33%" : "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatarContainer: { position: "relative", marginBottom: "1.5rem" },
    avatar: {
      width: "14rem",
      height: "14rem",
      borderRadius: "9999px",
      objectFit: "cover",
      boxShadow: `0 10px 25px -5px ${
        theme.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
      }`,
      border: `4px solid ${theme.colors.cardBg}`,
    },
    avatarEmoji: {
      position: "absolute",
      bottom: "1rem",
      right: "1rem",
      fontSize: "2.25rem",
      backgroundColor: theme.colors.cardBg,
      borderRadius: "9999px",
      padding: "0.5rem",
      boxShadow: `0 4px 6px -1px ${
        theme.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
      }`,
    },
    skillsCard: {
      width: "100%",
      maxWidth: "28rem",
      padding: "1.5rem",
      backgroundColor: theme.colors.cardBg,
      borderRadius: "0.75rem",
      boxShadow: theme.shadows.cardSoft,
      border: `1px solid ${theme.colors.borderLight}`,
    },
    skillsTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "1.25rem",
      color: theme.colors.accentDark,
      textAlign: isDesktop ? "left" : "center",
      fontFamily: theme.fonts.heading,
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      justifyContent: isDesktop ? "flex-start" : "center",
    },
    skillPill: {
      padding: "0.375rem 1rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "transform 0.2s ease",
    },
    rightColumn: {
      width: isDesktop ? "66.66%" : "100%",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    title: {
      fontSize: "2.25rem",
      fontWeight: "800",
      marginBottom: "0.5rem",
      color: theme.colors.textPrimary,
      fontFamily: theme.fonts.heading,
    },
    bioText: {
      fontSize: "1.125rem",
      color: theme.colors.textSecondary,
      lineHeight: 1.7,
    },
    bioTextStrong: { color: theme.colors.textPrimary, fontWeight: "600" },
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
      marginTop: "1rem",
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
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.leftColumn}>
          <div style={styles.avatarContainer}>
            <img
              src={assets.profilephoto}
              alt="Jimutha Ranawaka"
              style={styles.avatar}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span style={styles.avatarEmoji}>👋</span>
          </div>
          <div style={styles.skillsCard}>
            <h3 style={styles.skillsTitle}>My Core Skills</h3>
            <div style={styles.skillsContainer}>
              {coreSkills.map((skill, index) => {
                const pillStyle =
                  theme.colors.pillColors[
                    index % theme.colors.pillColors.length
                  ];
                return (
                  <span
                    key={index}
                    style={{
                      ...styles.skillPill,
                      backgroundColor: pillStyle.bg,
                      color: pillStyle.text,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {" "}
                    {skill}{" "}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div style={styles.rightColumn}>
          <h2 style={styles.title}>About Me</h2>
          <WavyUnderline />
          <p style={{ ...styles.bioText, marginTop: "1.5rem" }}>
            Hi, I’m a passionate and driven{" "}
            <strong style={styles.bioTextStrong}>
              Front-End and Full-Stack Developer
            </strong>{" "}
            with a strong focus on creating seamless, user-centered digital
            experiences. With a background in{" "}
            <strong style={styles.bioTextStrong}>UX/UI design</strong>, I bring
            a balance of technical precision and creative vision to every
            project I work on.
          </p>
          <p style={styles.bioText}>
            Beyond the world of coding, I’m also a{" "}
            <strong style={styles.bioTextStrong}>
              professional-level cricketer
            </strong>
            , which has taught me invaluable lessons in teamwork, leadership,
            and performing under pressure. Whether I’m leading a team on the
            field or in a development sprint, I thrive on solving problems
            quickly, making confident decisions, and keeping calm in high-stakes
            situations.
          </p>
          <p style={styles.bioText}>
            I take pride in being a{" "}
            <strong style={styles.bioTextStrong}>
              quick thinker, effective decision maker, and natural leader
            </strong>
            , always pushing myself and those around me to deliver exceptional
            results. For me, development isn’t just about writing code — it’s
            about building intuitive solutions that make an impact.
          </p>
          <div>
            <a
              href="/Jimutha-Ranawaka-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.buttonBase,
                ...styles.buttonPrimary,
                ...(resumeHover ? styles.buttonPrimaryHover : {}),
              }}
              {...resumeProps}
            >
              <Download size={20} />
              <span>Download My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
