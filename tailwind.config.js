// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your components
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#001F54',   // Deep navy blue for dark sections or headers
        'accent': '#40E0D0',      // Teal for highlights and accents
        'light-grey': '#E5E4E2',  // Silver-like light grey for main section backgrounds
        'dark-grey': '#4B4B4B',   // Neutral dark grey for text and readability
        'highlight-blue': '#0A74DA', // Bright blue for secondary highlights
      },
    },
  },
  plugins: [],
};
