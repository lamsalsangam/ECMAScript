/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // It will override the tailwind colors so it is better to provide the customization color in the extend
    // colors: {
    //   vuejs: "#49e659",
    // },
    extend: {
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#435462",
        },
      },
    },
  },
  plugins: [],
};
