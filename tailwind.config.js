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
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        scaleUp: "scaleUp 0.2s ease-in-out",
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'}
    }
  },
  plugins: [],
}