// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { theme } from "./theme";

// We must inject keyframes globally with a <style> tag.
// This is the cleanest way to handle animations for inline styles.
const keyframes = `
  @keyframes fade-in-out {
    0%, 100% { 
      opacity: 0; 
      transform: translateY(10px); 
    }
    10%, 90% { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes wavy {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Keyframes for hero blobs */
  @keyframes blob-move {
    0% { transform: scale(1) translate(0px, 0px); }
    50% { transform: scale(1.2) translate(20px, -30px); }
    100% { transform: scale(1) translate(0px, 0px); }
  }
`;

const styles = {
  appWrapper: {
    minHeight: "100vh",
    backgroundColor: theme.colors.baseLight,
    color: theme.colors.textDark,
  },
  mainContainer: {
    maxWidth: "72rem", // 6xl
    margin: "0 auto",
    padding: "0 1.5rem", // px-6
  },
};

const App = () => {
  return (
    <>
      {/* Inject our global animations */}
      <style>{keyframes}</style>

      <div style={styles.appWrapper}>
        <Header />
        <main>
          <Hero />

          <div style={styles.mainContainer}>
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
