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
        btnL: "#e55547",
        btnR: "#b02619",
        primaryColor: "#13FF00",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
