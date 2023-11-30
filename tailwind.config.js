/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {
      aspectRatio: {
        square: "1",
      },
      colors: {
        secondaryBgColor: "#171c21",
        primaryColor: "#13FF00",
        greyColor: "#2c2c30",
        hoverColor: "#10dc00",
        activeColor: "#0eb800",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
