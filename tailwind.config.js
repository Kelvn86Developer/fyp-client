/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        main:{
          400: "#3B97B6",
          900: "#114155",
          130: "rgba(59,159,182,0.13)",

        },
        ash:{
          130: "rgba(17,65,85,0.13)",
          400: "rgba(17,65,85,9)",
        },
        ore:{
          130: "rgba(245,103,39,0.13)",
        }
      }
    },
  },
  plugins: [
  ],
}