export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      orange: {
        100: "#fd9b4f",
        200: "#f86f03",
        300: "#e36503",
        400: "#cf5b00",
        500: "#46290f",
        600: "#321505",
      },

      gold: {
        100: "#ffb84d",
        200: "#ffa41b",
        300: "#EA920E",
        400: "#e38b06",
        500: "#46300F",
        600: "#322005",
      },

      blue: {
        100: "#7D87E5",
        200: "#5562E2",
        300: "#3B49D3",
        400: "#262951",
        500: "#242649",
        600: "#1F2240",
      },

      grey: {
        100: "#f3f3f3",
        200: "#d7d7d7",
        300: "#95959a",
        400: "#141419",
        500: "#101014",
        600: "#0f0f11",
        700: "#0a0a0b",
      },
    },

    fontSize: {
      xxs: "12px",
      xs: "14px",
      sm: "16px",
      base: "18px",
      xbase: "20px",
      md: "24px",
      lg: "36px",
      xl: "40px",
    },

    fontFamily: {
      "roboto-flex": ["Roboto Flex", "sans-serif"],
    },

    extend: {
      spacing: {
        "section-x-xs": "40px",
        "section-x-sm": "80px",
        "section-x-md": "130px",
        "section-x-lg": "230px",
        "section-x-xl": "394px",
        "section-y-xs": "100px",
        "section-y-sm": "120px",
        "section-y-md": "140px",
        "section-y-lg": "180px",
      },
    },
  },
  plugins: [],
};
