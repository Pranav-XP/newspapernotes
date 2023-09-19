import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["var(--font-newsreader)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        bodyColor: "#fcfce6",
        modalBg: "rgba(0, 0, 0, 0.61)",
      },
    },
  },
  plugins: [],
} satisfies Config;
