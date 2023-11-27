// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
    // "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-animated'),
    require("flowbite/plugin"),
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFFFFF",
              foreground: "#000000",
            },
            focus: "#FFFFFF",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#000000",
              foreground: "#FFFFFF",
            },
            focus: "#000000",
          },
        },
      },
    }),
  ],
}

export default config;