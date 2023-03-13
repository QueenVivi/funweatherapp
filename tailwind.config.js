const colors = require("tailwindcss/colors");
const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    createThemes({
      fallback: {
        primary: colors.teal[600],
        title: colors.teal[700],
        panel: colors.teal[200],
        background: colors.teal[100],
      },
      sunny: {
        primary: colors.amber[800],
        title: colors.amber[900],
        panel: colors.amber[200],
        background: colors.amber[100],
      },
      rainy: {
        primary: colors.blue[500],
        title: colors.blue[800],
        panel: colors.blue[200],
        background: colors.blue[100],
      },
      cloudy: {
        primary: colors.slate[800],
        title: colors.slate[800],
        panel: colors.slate[200],
        background: colors.slate[100],
      },
      snowy: {
        primary: colors.violet[500],
        title: colors.violet[800],
        panel: colors.violet[200],
        background: colors.violet[100],
      },
    }),
  ],
};
