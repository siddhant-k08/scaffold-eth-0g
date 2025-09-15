/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors - 0G Design System
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9200E1", // Purple shade
          "primary-content": "#FEFEFE",
          secondary: "#B75FFF", // Purple 1
          "secondary-content": "#FEFEFE",
          accent: "#CB8AFF", // Purple 2
          "accent-content": "#000000",
          neutral: "#E5E5E5", // Gray 1
          "neutral-content": "#000000",
          "base-100": "#FEFEFE", // White
          "base-200": "#E5E5E5", // Gray 1
          "base-300": "#000000", // Black
          "base-content": "#000000", // Black
          info: "#D5A3FF", // Purple 3
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "0.5rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#9200E1", // Purple shade
          "primary-content": "#FEFEFE",
          secondary: "#B75FFF", // Purple 1
          "secondary-content": "#000000",
          accent: "#CB8AFF", // Purple 2
          "accent-content": "#000000",
          neutral: "#E5E5E5", // Gray 1
          "neutral-content": "#000000",
          "base-100": "#000000", // Black
          "base-200": "#E5E5E5", // Gray 1
          "base-300": "#FEFEFE", // White
          "base-content": "#FEFEFE", // White
          info: "#D5A3FF", // Purple 3
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "0.5rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        regola: ["Regola Pro", "sans-serif"],
        "geist-mono": ["Geist Mono", "monospace"],
      },
      colors: {
        "0g": {
          black: "#000000",
          white: "#FEFEFE",
          "gray-1": "#E5E5E5",
          "purple-shade": "#9200E1",
          "purple-1": "#B75FFF",
          "purple-2": "#CB8AFF",
          "purple-3": "#D5A3FF",
          "purple-4": "#E3C1FF",
        },
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
