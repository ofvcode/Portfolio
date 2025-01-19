/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include the main HTML file
    './scripts/**/*.{js,ts}', // Include any JavaScript or TypeScript files in the scripts folder
  ],
  theme: {
    screens: {
      'sm': '640px',
      

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
