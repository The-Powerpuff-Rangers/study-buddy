export default {
  content: [
    "./src/**/*.ts",
    "./src/**/*.svelte",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors:{
        transparent: "transparent",
        primary:{
          100: "#f02c64",
          200: "#da1b5a",
          300: "#bf0d51",
        },
        neutral:{
          0: "#fffefe",
          5: "#fafbfe",
          10: "#f2f2f8",
          30: "#e8ebf1",
          50: "#c5c6d9",
          70: "#848ca3",
          100: "#606b7a",
          120: "#4f5769",
          150: "#373a4f",
          200: "#27293a",
          300: "#1b1b27",
          400: "#161723",
          500: "#14141f",
        },}
    },
  },
  plugins: [],
}