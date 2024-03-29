/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "22px"],
      lg: ["18px", "24px"],
      xl: ["24px", "30px"],
      xxl: ["28px", "34px"],
      h1: ["72px", "80px"],
      h2: ["48px", "54px"],
      h3: ["36px", "42px"],
      h4: ["22px", "28px"],
    },
    colors: {
      primaryBlack: "#272D4E",
      secondaryBlack: "#565656",
      purpleLight: "#E5DDFF",
      white: "#ffffff",
      black: "#000000",
      grey: "#888888",
      mediumGrey: "#dddddd",
      darkGrey: "#666666",
      transparent: "#0000",
      hrColor: "#9A7DFF",
      primaryColor: {
        100: "#ece7fe",
        150: "#ebe6fe",
        200: "#c5b6fc",
        300: "#9e85fa",
        400: "#7854F7",
        450: "#643cf6",
        500: "#653EED",
      },
      greenColor: {
        400: "#70C217",
        450: "#63ad14",
      },
    },
    borderRadius: {
      "5px": "5px",
      "4xl": "30px",
      full: "9999px",
    },
    boxShadow: {
      "blog-img-shadow": "-25px 20px 44px 0 rgba(84, 48, 209, 0.4)",
      "card-shadow": "0 0 20px 0 rgba(0, 0, 0, 0.2)",
      "slider-card-shadow": "0 18px 52px 0 rgba(215, 228, 249, 0.5)",
    },
    zIndex: {
      1: "1",
      10: "10",
      11: "11",
    },
  },
  plugins: [],
};
