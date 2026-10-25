/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12213B",
        parchment: "#FAF6ED",
        parchment2: "#F1EAD9",
        gold: "#D9A441",
        teal: "#2E6E63",
        rust: "#B4482F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        perf: "radial-gradient(circle, transparent 4px, #FAF6ED 4px)",
      },
    },
  },
  plugins: [],
}

