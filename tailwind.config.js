/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      dance:["var(--font-dance)"],
      robot:["var(--robot)"],
      rale:["var(--font-rale)"]
    },
    colors:{
      pri:"#0891b2",
      sec:"#1ad4f5",
      },
    },
  },
  plugins: [],
};
