/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF8DC", // Light shade
          200: "#FFEFD5",
          300: "#FFD700", // Default Bright Yellow
          400: "#FFC700",
          500: "#FFB000",
          600: "#FF9900",
          700: "#FF8000",
          800: "#FF6700",
          900: "#FF5500", // Darker shade
        },
        secondary: {
          100: "#FFB6A1", // Light shade
          200: "#FF9C80",
          300: "#FF7F50", // Default Coral
          400: "#FF6430",
          500: "#FF4A1C",
          600: "#FF2F08",
          700: "#F62300",
          800: "#D61B00",
          900: "#A61200", // Darker shade
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
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"], // Example of a custom font family
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
