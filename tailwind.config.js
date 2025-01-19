/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add the main HTML file to content
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear', // Add custom tilt animation
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)", // Define keyframe at start, middle, and end
          },
          "25%": {
            transform: "rotate(1deg)", // Define keyframe at 25%
          },
          "75%": {
            transform: "rotate(-1deg)", // Define keyframe at 75%
          },
        },
      },
    },
  },
  plugins: [],
};
