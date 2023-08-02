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
        primaryColor: "#13FF00",
        hoverColor: "#10dc00",
        activeColor: "#0eb800",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
