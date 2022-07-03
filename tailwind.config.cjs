/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        primary: {
          red: "hsl(0, 78%, 62%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          blue: "hsl(212, 86%, 64%)",
        },
        neutral: {
          "dark-blue": "hsl(234, 12%, 34%)",
          "gray-blue": "hsl(229, 6%, 66%)",
          "light-gray": "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        cardShadow: "0px 15px 30px -11px rgba(131, 166, 210, 0.5)",
      },
    },
  },
  plugins: [],
};
