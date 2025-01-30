import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1536px" }, // Apply styles below 1536px
        xl: { max: "1280px" }, // Apply styles below 1280px
        lg: { max: "1024px" }, // Apply styles below 1024px
        md: { max: "768px" }, // Apply styles below 768px
        sm: { max: "640px" }, // Apply styles below 640px
        xs: { max: "480px" }, // Apply styles below 480px
      },
      backgroundColor: {
        fadeout:
          "linear gradient(0deg, white 5%, rgba(33,39,51,0) 50%, white 74%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#212733",
        background_light: "#2B3443",
        primary: "#68D6D3",
      },
    },
  },
  plugins: [],
};
export default config;
