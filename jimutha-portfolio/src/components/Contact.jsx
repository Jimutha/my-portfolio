// src/components/Contact.jsx
import React, { useState } from "react";
import { Send, Mail } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import WavyUnderline from "./WavyUnderline";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const Contact = () => {
  const { theme } = useTheme();
  const [sendHover, sendProps] = useHover();
  const [emailHover, emailProps] = useHover();

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const styles = {
    section: { padding: "6rem 0" },
    title: {
      fontSize: "2.25rem",
      fontWeight: "800",
      marginBottom: "0.5rem",
      textAlign: "center",
      color: theme.colors.textPrimary,
      fontFamily: theme.fonts.heading,
    },
    underlineContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1.5rem",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: theme.colors.textSecondary,
      marginBottom: "3rem",
      maxWidth: "36rem",
      margin: "0 auto 3rem auto",
      textAlign: "center",
      lineHeight: 1.6,
    },
    formContainer: {
      maxWidth: "36rem",
      margin: "0 auto",
      padding: "2rem",
      backgroundColor: theme.colors.cardBg,
      borderRadius: "0.75rem",
      boxShadow: theme.shadows.cardSoft,
      border: `1px solid ${theme.colors.borderLight}`,
    },
    form: { display: "flex", flexDirection: "column", gap: "1.5rem" },
    label: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: theme.colors.textSecondary,
      marginBottom: "0.5rem",
    },
    inputBase: {
      width: "100%",
      padding: "0.75rem 1rem",
      backgroundColor: theme.colors.inputBg,
      border: `2px solid ${theme.colors.borderGray}`,
      borderRadius: "0.5rem",
      fontSize: "1rem",
      color: theme.colors.textPrimary,
      transition: "border-color 0.15s ease, box-shadow 0.15s ease",
      outline: "none",
      fontFamily: theme.fonts.sans,
    },
    inputFocused: {
      borderColor: theme.colors.accentPrimary,
      boxShadow: `0 0 0 3px ${
        theme.mode === "light"
          ? "rgba(29, 233, 182, 0.3)"
          : "rgba(29, 233, 182, 0.5)"
      }`,
    },
    buttonBase: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.875rem 1.5rem",
      borderRadius: "9999px",
      fontWeight: "600",
      transition: theme.transition,
      textDecoration: "none",
      border: "2px solid transparent",
      cursor: "pointer",
      fontSize: "1rem",
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
    emailContainer: {
      marginTop: "2rem",
      textAlign: "center",
      color: theme.colors.textSecondary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    emailLink: {
      color: theme.colors.accentPrimary,
      fontWeight: "600",
      textDecoration: "none",
    },
    emailLinkHover: { textDecoration: "underline" },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Let's Create Something Amazing!</h2>
      <div style={styles.underlineContainer}>
        <WavyUnderline />
      </div>
      <p style={styles.subtitle}>
        Have a project in mind, a job opportunity, or just want to talk cricket?
        Reach out!
      </p>
      <div style={styles.formContainer}>
        <form
          name="contact"
          method="POST"
          action="https://formspree.io/f/YOUR_FORM_ID"
          /* <-- REPLACE ID */ style={styles.form}
        >
          <div>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              style={{
                ...styles.inputBase,
                ...(nameFocused ? styles.inputFocused : {}),
              }}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              style={{
                ...styles.inputBase,
                ...(emailFocused ? styles.inputFocused : {}),
              }}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </div>
          <div>
            <label htmlFor="message" style={styles.label}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message..."
              required
              style={{
                ...styles.inputBase,
                resize: "vertical",
                ...(messageFocused ? styles.inputFocused : {}),
              }}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              ...styles.buttonBase,
              ...styles.buttonPrimary,
              ...(sendHover ? styles.buttonPrimaryHover : {}),
            }}
            {...sendProps}
          >
            <Send size={20} />
            <span>Send Message</span>
          </button>
        </form>
        <div style={styles.emailContainer}>
          <Mail size={18} style={{ color: theme.colors.accentDark }} />
          <span>or email directly: </span>
          <a
            href="mailto:Jimuthasr11@gmail.com"
            style={{
              ...styles.emailLink,
              ...(emailHover ? styles.emailLinkHover : {}),
            }}
            {...emailProps}
          >
            {" "}
            Jimuthasr11@gmail.com{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
