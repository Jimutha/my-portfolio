Jimutha Ranawaka - Professional Portfolio

🚀 Overview

This repository hosts the official personal portfolio for Jimutha Ranawaka, a Full Stack Developer and UX/UI Designer.

The site is built as a single-page application (SPA) designed to be fast, highly responsive, and visually dynamic, showcasing a balance between technical proficiency and modern design aesthetics.

Key Features

Dynamic Title Rotation: Professional titles fade in and out in the Hero section.

Dual Theme Support: Fully implemented Light/Dark mode toggle (Dark mode is default).

Pure Inline CSS Approach: Styles are managed entirely via React's inline styling and custom hooks, eliminating CSS build step complexities (PostCSS/Tailwind configuration issues).

Functional Contact Form: Serverless form submission handled via Formspree, providing instant user feedback (success/error banners).

Responsive Project Filtering: Projects section features filtering by 'Team' and 'Individual' and a 'See All' load mechanism.

🛠 Tech Stack

Frontend: React (Vite)

Styling: Pure JavaScript Inline Styles & Custom CSS Variables (Zero external CSS frameworks)

State Management: React Context (for Theme Management) and useState/useMemo Hooks

Icons: Lucide React

Form Backend: Formspree (Serverless)

⚙️ Installation and Setup

Prerequisites

Ensure you have Node.js (which includes npm) installed on your system.

Steps

Clone the repository:

git clone [https://github.com/Jimutha/jimutha-portfolio.git](https://github.com/Jimutha/jimutha-portfolio.git)
cd jimutha-portfolio


Install dependencies:
This project uses standard React dependencies (no complex build tools required).

npm install


Configure the Contact Form:

Sign up at Formspree.io and create a new form.

Copy your unique form endpoint URL (e.g., https://formspree.io/f/mvgwejdo).

Open src/components/Contact.jsx and replace the placeholder URL inside the handleSubmit function with your live endpoint.

// Inside src/components/Contact.jsx, line 46:
const response = await fetch("YOUR_UNIQUE_FORMSPREE_URL_HERE", { 


Add Assets:
For the project to display correctly, you must place your images into the src/assets/ folder, matching the filenames referenced in src/assets/assets.js.

Running Locally

To start the development server and view the project in your browser:

npm run dev


The application will typically open at http://localhost:5173/.

📂 Project Structure

This project uses a modular component structure:

jimutha-portfolio/
├── src/
│   ├── assets/                 # All images/illustrations used
│   │   └── assets.js           # Central file for importing and managing image paths
│   ├── components/             # Individual, self-contained UI components
│   │   ├── Header.jsx
│   │   ├── Projects.jsx
│   │   └── MobileNavLink.jsx   # Fixes for React Hooks Rule violations
│   ├── contexts/
│   │   ├── ThemeContext.jsx    # Theme Provider (Only exports component)
│   │   └── ThemeContextDefinition.js # Exports Context object (Fixes ESLint/Fast Refresh)
│   ├── data/
│   │   └── projects.js         # Project content data array
│   ├── hooks/
│   │   ├── useTheme.js         # Custom hook for consuming theme state (Corrected import)
│   │   ├── useMediaQuery.jsx   # Custom hook for responsive logic
│   │   └── useTitleRotator.jsx # Custom hook for Hero animation
│   ├── App.jsx                 # Main layout and global animation injection
│   └── theme.js                # Global JavaScript object defining colors and styles
└── package.json


👨‍💻 Author

Jimutha Ranawaka

GitHub: https://github.com/Jimutha

LinkedIn: www.linkedin.com/in/jimutha18

Contact: jimuthasr11@gmail.com
