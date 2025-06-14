/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        fluff: {
          old: "#DE3273",
          pink: "#e50b7e",
          party: "#782282",
          aber: "#a466a7",
          violet: "#481359",
          darkboop: "#0A084A",
          cute: "#f7c1da",
          sunrise: "#fdeff2",
        },
        knight: {
          "gold-dark": "#dba80d",
          "gold-light": "#e1bc4d",
          "silver-dark": "#a1a1a1",
          "silver-light": "#d4d4d4",
          "blue-dark": "#265999",
          "blue-light": "#4788bd",
        },
        magic: {
          "blue-dark": "#09075f",
          gray: "#4b3f72",
          purple: "#6a0dad",
          "pink-dark": "#9b4d96",
          green: "#7be30b",
          "green-dark": "#7AB52F",
        },
        brands: {
          twitch: "#9146ff",
          "twitch-ice": "#f0f0ff",
        },
      },
      fontFamily: {
        title: ['"Cinzel"', ...defaultTheme.fontFamily.serif],
        body: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      height: {
        0.5: "2px",
      },
    },
  },
  plugins: [],
};