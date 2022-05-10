module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#50F8D1",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')]
}
