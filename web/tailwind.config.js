/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          300: "#3B82F6", 
          400: "#2563EB", 
          700: "#1D4ED8", 
        },
        violet: {
          700: "#6D28D9", 
          800: "#5B21B6", 
        },
        gray: {
          400: "#D1D5DB", 
          600: "#4B5563", 
          700: "#1F2937", 
        },
      }
    },
  },
  plugins: [],
}