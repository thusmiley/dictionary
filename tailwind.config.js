/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-05": "#050505",
        "dark-1f": "#1f1f1f",
        "dark-2d": "#2d2d2d",
        "dark-3a": "#3a3a3a",
        "grey-75": "#757575",
        "grey-e9": "#e9e9e9",
        "grey-f4": "#f4f4f4",
        purple: "#a445ed",
        red: "#ff5252",
      },
      spacing: {
        container: "var(--container-w)",
        cx: "calc((100% - var(--container-w)) / 2)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
    },
    fontFamily: {
      sans: "sans-serif",
      serif: "serif",
      mono: "monospace",
    },
    boxShadow: {
      "xl-light": "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
      "xl-dark": "0px 5px 30px 0px #A445ED",
    },
  },
  plugins: [],
};
