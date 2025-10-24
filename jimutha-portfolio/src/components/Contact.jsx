// src/components/Contact.jsx
import React, { useState } from "react";
import { Send, Mail, CheckCircle, AlertTriangle } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import WavyUnderline from "./WavyUnderline";

// Reusable hook for hover states (defined outside the component for clarity)
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

  // New state for form status and input focus
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  // --- Form Submission Handler ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.target;
    const data = new FormData(form);

    try {
      // Replaced placeholder with user's live Formspree endpoint
      const response = await fetch("https://formspree.io/f/mvgwejdo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Clear the form fields
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };
  // --- End of Handler ---

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
      // FIX: Use longhand properties to avoid React warnings
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: theme.colors.borderGray,

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

  // Custom message styles
  const messageStyles = {
    success: {
      color: theme.colors.accentDark,
      backgroundColor:
        theme.mode === "dark" ? "rgba(29, 233, 182, 0.1)" : "#E0F7FA",
      padding: "1rem",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      transition: theme.transition,
    },
    error: {
      color: theme.mode === "dark" ? "#FF4081" : "#D81B60",
      backgroundColor:
        theme.mode === "dark" ? "rgba(255, 64, 129, 0.1)" : "#FFEBEE",
      padding: "1rem",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      transition: theme.transition,
    },
  };

  const getButtonText = () => {
    if (status === "submitting") return "Sending...";
    if (status === "success") return "Sent!";
    return "Send Message";
  };

  const isSubmitting = status === "submitting" || status === "success";

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
        {/* Success/Error Message */}
        {status === "success" && (
          <div style={messageStyles.success}>
            <CheckCircle size={24} />
            <span style={{ fontWeight: "600" }}>
              Message Sent! Thank you for reaching out.
            </span>
          </div>
        )}
        {status === "error" && (
          <div style={messageStyles.error}>
            <AlertTriangle size={24} />
            <span style={{ fontWeight: "600" }}>
              Error sending message. Please try emailing directly.
            </span>
          </div>
        )}

        <form name="contact" onSubmit={handleSubmit} style={styles.form}>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              ...styles.buttonBase,
              ...styles.buttonPrimary,
              ...(sendHover && !isSubmitting ? styles.buttonPrimaryHover : {}),
              opacity: isSubmitting ? 0.7 : 1,
            }}
            {...sendProps}
            disabled={isSubmitting}
          >
            <Send size={20} />
            <span>{getButtonText()}</span>
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
