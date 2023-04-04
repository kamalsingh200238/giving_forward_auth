/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./development/routes/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1899D6",
      },
      fontFamily: {
        caveat:
          '"Caveat", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  plugins: [],
};
