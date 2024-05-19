/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#262222",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        iceland: "Iceland",
      },
    },
    fontSize: {
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
