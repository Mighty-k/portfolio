/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B2F8C",
        accent: "#00BFA6",
        charcoal: "#1F2937",
        coolGray: "#9CA3AF",
        background: "#F7F8FA",
        coral: "#FF6B6B",
        dark: "#0b1020",
        "dark-light": "#0f1724",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
      boxShadow: {
        "soft-lg": "0 10px 30px rgba(16,24,40,0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
