/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        serenity: "#CFC6FF",        // lavender
        glowPink: "#FFB7D5",
        softMint: "#C3FFF2",
        neuralBlue: "#A7D7FF",
        blushPearl: "#FFEAF2",
        graphite: "#1A1C3B",
        coolGrey: "#EAEAF4",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};


