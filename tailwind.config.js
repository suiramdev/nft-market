module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      whitesmoke: "#FAFBFE",
      gray: "#BFBFBF",
      darkgray: "#535353",
      black: "#000000",
      blue: "#3B82F6",
      darkblue: "#2563EB",
      lightblue: "#7A9FFF",
      red: "#FF7171"
    },
    extend: {
      gridTemplateColumns: {
        autoFill: "repeat(auto-fit, minmax(300px, 1fr))",
      }
    }
  },
  plugins: [],
}