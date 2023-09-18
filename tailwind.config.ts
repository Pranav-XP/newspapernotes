import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-newsreader)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors:{
        bodyColor:"#fcfce6"
      },
    },
  },
  plugins: [],
} satisfies Config;
