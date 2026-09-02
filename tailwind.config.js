/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy:  '#0F2A6B', // azul marino del logo (texto principal / secciones oscuras)
        sky:   '#1CA7D8', // celeste del logo (acento principal, CTAs, detalles)
        slate: '#4A72B8', // azul medio del logo (secundario)
        teal:  '#0D6E8C', // azul-verdoso de apoyo (variación para los sellos)
        paper: '#F7F9FC', // fondo claro, frío, para acompañar el azul
        line:  '#DCE4F0', // líneas de libreta / bordes sutiles
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
