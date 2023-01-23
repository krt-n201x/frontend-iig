module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#253D4E',
        'secondary-gray': '#ADADAD',
        'secondary-green': '#3BB77E'
      }
    }
  },
  plugins: []
}