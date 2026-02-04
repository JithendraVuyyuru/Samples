import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        squircle: "32px",
      },
      colors: {
        paper: {
          DEFAULT: "#F2F2F2",
          card: "#FFFFFF",
          text: "#222222",
        },
        cyber: {
          DEFAULT: "#111111",
          card: "#1A1A1A",
          text: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
