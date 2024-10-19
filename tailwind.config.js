/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0F7FA", // Light Blue
          200: "#B2EBF2", // Light Cyan
          300: "#80DEEA", // Cyan
          400: "#4DD0E1", // Deep Sky Blue
          500: "#26C6DA", // Bright Blue
          600: "#00BCD4", // Dark Cyan
          700: "#00ACC1", // Teal
          800: "#0097A7", // Dark Teal
          900: "#00838F", // Deep Teal
        },
        secondary: {
          100: "#FFEBEE", // Light Pink
          200: "#FFCDD2", // Soft Pink
          300: "#EF9A9A", // Light Red
          400: "#E57373", // Medium Red
          500: "#EF5350", // Bright Red
          600: "#F44336", // Red
          700: "#E53935", // Dark Red
          800: "#D32F2F", // Darker Red
          900: "#C62828", // Darker Red
        },
        accent: {
          100: "#FFE0B2", // Light Orange
          200: "#FFCC80", // Soft Orange
          300: "#FFB74D", // Medium Orange
          400: "#FFA726", // Bright Orange
          500: "#FF9800", // Orange
          600: "#FB8C00", // Dark Orange
          700: "#F57C00", // Darker Orange
          800: "#EF6C00", // Dark Orange
          900: "#E65100", // Deep Orange
        },
        background: {
          100: "#F7F7F7", // Light shade
          200: "#F0F0F0", // Default Light Gray
          300: "#E5E5E5",
          400: "#D8D8D8",
          500: "#CFCFCF",
        },
        text: {
          100: "#FFFFFF", // Light shade
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#999999",
          500: "#11181C", // Default Dark Slate
        },
        lightText: {
          100: "#F2F2F2", // Light shade for dark mode
          200: "#ECEDEE", // Default Light Gray for dark mode
        },
        icon: {
          100: "#C0E1FF", // Light shade
          200: "#A4D8FF",
          300: "#87CEEB", // Default Sky Blue
          400: "#67B3FF",
          500: "#4A97FF",
        },
        darkBackground: {
          100: "#262829", // Light shade for dark mode
          200: "#151718", // Default Dark Background
        },
      },
      textColor: {
        heading: "#11181C", // Heading color
        main: "#333", // Main text color
        label: "#888888", // Label color
        number: "#FF4A1C", // Number color
      },
      fontSize: {
        heading: ["32px", { lineHeight: "40px", fontWeight: "700" }], // Heading style
        main: ["16px", { lineHeight: "24px", fontWeight: "400" }], // Main text style
        label: ["14px", { lineHeight: "20px", fontWeight: "500" }], // Label style
        number: ["20px", { lineHeight: "28px", fontWeight: "600" }], // Number style
      },
      fontFamily: {
        quick: ["quicksand", "sans-serif"],
        baloo: ["Baloo2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
