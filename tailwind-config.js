/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './config/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
