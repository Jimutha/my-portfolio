// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

const keyframes = `
  @keyframes fade-in-out { 0%, 100% { opacity: 0; transform: translateY(10px); } 10%, 90% { opacity: 1; transform: translateY(0); } }
  @keyframes wavy { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes blob-move { 0% { transform: scale(1) translate(0px, 0px); } 50% { transform: scale(1.2) translate(20px, -30px); } 100% { transform: scale(1) translate(0px, 0px); } }
`;

const App = () => {
  const { theme } = useTheme();

  const styles = {
    appWrapper: {
      minHeight: "100vh",
      transition: theme.transition,
    },
    mainContainer: {
      maxWidth: "72rem",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
  };

  return (
    <>
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
