/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../components/web/src/**/*.{ts,tsx}", // TODO: Remove this once the library is published
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
