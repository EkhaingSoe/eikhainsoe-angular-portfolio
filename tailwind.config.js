/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "ball-move": {
          "0%, 100%": { top: "0%" },
          "50%": { top: "100%" },
        },
      },
      animation: {
        "ball-move": "ball-move 8s ease-in-out infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F8F6FB", // Add your custom colors here
        custom: {
          red: "#F4194A",
          purple: "#7B18D5",
          blue: "#5F6AF5",
          orange: "#F5885F",
          teal: "#33DBE2",
          navy: "#4050B5",
          danger: "#F44336",
          pink: "#ED578A",
          gray: "#607D8B",
          green: "#5DAF90",
        },
      },
    },
  },
  plugins: [],
};
