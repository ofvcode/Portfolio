/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include the main HTML file
    './scripts/**/*.{js,ts}', // Include any JavaScript or TypeScript files in the scripts folder
  ],
  theme: {
    extend: {
      // Add custom styles or extend the theme here
      colors: {

      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here, if needed
  ],
};
