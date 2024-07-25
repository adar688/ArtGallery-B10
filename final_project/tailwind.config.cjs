module.exports = {
  darkMode: 'class', // Use 'class' to enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify paths to all your template files
  theme: {
    extend: {
      colors: {
        primaryBGDark: "#0a090b", // Dark mode background color
        textDark: "#ffffff", // Dark mode text color
        primaryBGLight: "#ffffff", // Light mode background color
        textLight: "#000000", // Light mode text color
      },
    },
  },
  plugins: [],
};
