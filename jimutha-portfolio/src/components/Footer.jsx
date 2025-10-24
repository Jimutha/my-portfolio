// src/components/Footer.jsx
import React, { useState } from "react";
import { Linkedin, Github, Instagram, MessageSquare } from "lucide-react";
import { theme } from "../theme";

// A component for hoverable icons
const SocialIcon = ({ href, label, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    color: isHovered ? theme.colors.accentPrimary : theme.colors.textLight,
    transform: isHovered
      ? "scale(1.1) translateY(-2px)"
      : "scale(1) translateY(0)",
    transition: theme.transition,
    display: "inline-block", // Added for transform
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={26} />,
      href: "https://www.linkedin.com/in/jimutha18",
      label: "LinkedIn",
    },
    {
      icon: <Github size={26} />,
      href: "https://github.com/Jimutha",
      label: "GitHub",
    },
    {
      icon: <Instagram size={26} />,
      href: "https://www.instagram.com/jimutha_18/profilecard/?igsh=aXJ2cnFmM2l3c3Jy",
      label: "Instagram",
    },
    {
      icon: <MessageSquare size={26} />,
      href: "https://wa.me/qr/QY5NBWZTQYVLL1",
      label: "WhatsApp",
    },
  ];

  const styles = {
    footer: {
      backgroundColor: theme.colors.cardBg,
      borderTop: `1px solid ${theme.colors.borderLight}`,
      marginTop: "4rem",
      padding: "3rem 1.5rem",
      textAlign: "center",
    },
    name: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: theme.colors.accentDark,
      marginBottom: "1.5rem",
      fontFamily: theme.fonts.heading,
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      marginBottom: "2rem",
    },
    copyright: {
      fontSize: "0.875rem",
      color: theme.colors.textLight,
    },
  };

  return (
    <footer style={styles.footer}>
      <h3 style={styles.name}>Jimutha Ranawaka</h3>

      <div style={styles.socialContainer}>
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} href={link.href} label={link.label}>
            {link.icon}
          </SocialIcon>
        ))}
      </div>

      <p style={styles.copyright}>
        Designed & Built by Jimutha Ranawaka | &copy; {new Date().getFullYear()}
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
