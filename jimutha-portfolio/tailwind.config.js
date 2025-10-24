/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Define your custom color palette for a vibrant, professional look
      colors: {
        "base-light": "#F8F9FA", // Soft off-white/light gray
        "text-dark": "#212529", // Near-black text

        // Primary Accent Color (Vibrant Teal/Mint)
        "accent-primary": "#1DE9B6", // Bright Teal
        "accent-dark": "#00BFA5", // Darker Teal for hover

        // Secondary Colors for Design Elements (Pills, Shadows, etc.)
        "brand-blue": "#448AFF",
        "brand-yellow": "#FFD740",
        "brand-pink": "#FF4081",
        "brand-purple": "#AB47BC",

        "card-bg": "#FFFFFF", // Clean White card background
      },
      // Custom shadows for a sense of depth (UI/UX style)
      boxShadow: {
        "card-soft": "0 10px 30px rgba(29, 233, 182, 0.15)", // Subtle teal glow
        "card-hover": "0 15px 40px rgba(29, 233, 182, 0.3)", // More pronounced glow on hover
      },
      // Custom Animation for the Hero Text Rotator
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: 0, transform: "translateY(10px)" },
          "10%, 90%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "title-rotate": "fade-in-out 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
