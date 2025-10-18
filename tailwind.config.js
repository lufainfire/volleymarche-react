/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0077b6",
        "background-light": "#ffffff",
        "background-dark": "#121212",
        "text-light": "#1f2937",
        "text-dark": "#f3f4f6",
        "card-light": "#f9fafb",
        "card-dark": "#1f2937",
        "border-light": "#e5e7eb",
        "border-dark": "#374151"
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}
