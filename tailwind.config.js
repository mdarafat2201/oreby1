/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main_bg_color: "#ffffff",
        secondary_bg_color: "#f5f5f3",
        main_font_color: "#262626",
        secondary_font_color: "#767676",
        footer_text_color: "#6d6d6d",
      },
    },
  },
  plugins: [],
};
