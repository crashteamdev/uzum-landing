/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: {
        800: "#393848"
      },
      blueGray: {
        25: "#FCFCFD",
        50: "#F8F9FC",
        100: "#EAECF5",
        200: "#D5D9EB",
        300: "#B3B8DB",
        400: "#717BBC",
        500: "#4E5BA6",
        600: "#3E4784",
        700: "#363F72",
        800: "#293056",
        900: "#101323"
      },
      grayModern: {
        25: "#FCFCFD",
        50: "#F8FAFC",
        100: "#EEF2F6",
        200: "#E3E8EF",
        300: "#CDD5DF",
        400: "#9AA4B2",
        500: "#697586",
        600: "#4B5565",
        700: "#364152",
        800: "#202939",
        900: "#121926"
      },
      blueCustom: {
        50: "#E5E3F8",
        100: "#CCC6F1",
        200: "#988DE2",
        300: "#6958D5",
        400: "#412EB7",
        500: "#2C207E",
        600: "#241A66",
        700: "#1B144D",
        800: "#110C31",
        900: "#090618",
        950: "#04030C"
      },
      white: {
        DEFAULT: "#fff"
      }
    },
    extend: {},
  },
  plugins: [],
};

