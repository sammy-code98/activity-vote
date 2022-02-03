module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
