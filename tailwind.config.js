const colors = require("tailwindcss/colors");
const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    createThemes({
      fallback: {
        title: colors.teal[700],
        border: colors.teal[600],
        panel: colors.teal[200],
        background: colors.teal[100],
      },
      sunny: {
        title: colors.amber[800],
        border: colors.amber[500],
        panel: colors.amber[200],
        background: colors.amber[100],
      },
      rainy: {
        title: colors.blue[800],
        border: colors.blue[500],
        panel: colors.blue[200],
        background: colors.blue[100],
      },
      cloudy: {
        title: colors.slate[800],
        border: colors.slate[500],
        panel: colors.slate[200],
        background: colors.slate[100],
      },
      snowy: {
        title: colors.violet[800],
        border: colors.violet[500],
        panel: colors.violet[200],
        background: colors.violet[100],
      },
    }),
  ],
};
