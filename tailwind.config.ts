import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C51F5F",
        secondary: "#E4E4E4",
        background: "#FFF4F8",
        "primary-dark": "#5F0025",
        pink: "#E73378",
        "pink-dark": "#A30F48",
        "pink-light": "#FF71A8",
        grey: "#BBB7B7",
        "grey-light": "#FFF1F1",
        "grey-medium": "#F5F7F9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
