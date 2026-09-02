# ESM PERÚ — Página institucional

## Estructura del proyecto
```
esm-tailwind/
├── index.html            ← el HTML de la página
├── tailwind.config.js    ← paleta de colores y fuentes personalizadas
├── package.json
├── src/
│   └── input.css         ← estilos base + estilos personalizados (sellos, líneas de libreta, etc.)
├── assets/
│   └── logo.jpg          ← tu logo
└── dist/
    └── output.css        ← CSS final compilado (se genera automáticamente, no lo edites a mano)
```

## Vista previa rápida (sin instalar nada)

Si solo quieres ver los cambios ya mismo, abre **`preview.html`** directo con doble clic (usa Tailwind por CDN, no necesita `npm`). Es solo para revisar rápido — el archivo real que se mantiene y edita es `index.html`.

## Cómo correrlo en VS Code

1. Abre la carpeta `esm-tailwind` en VS Code.
2. Abre una terminal (Ctrl+ñ o Terminal → New Terminal) y ejecuta:
   ```bash
   npm install
   ```
   Esto instala Tailwind CSS como dependencia de desarrollo.

3. Para trabajar mientras editas (recompila el CSS automáticamente cada vez que guardas):
   ```bash
   npm run watch
   ```
   Déjalo corriendo en la terminal mientras editas `index.html`.

4. Abre `index.html` con la extensión **Live Server** de VS Code (clic derecho → "Open with Live Server") para verlo en el navegador con recarga automática.

5. Cuando termines y quieras la versión final optimizada para subir al hosting:
   ```bash
   npm run build
   ```
   Esto genera `dist/output.css` minificado, listo para producción.

## Paleta de colores (tomada del logo)

| Nombre    | Hex       | Uso                                  |
|-----------|-----------|---------------------------------------|
| `navy`    | `#0F2A6B` | Texto principal, secciones oscuras   |
| `sky`     | `#1CA7D8` | Acento principal, CTAs, detalles     |
| `slate`   | `#4A72B8` | Color secundario                     |
| `teal`    | `#0D6E8C` | Variación para los sellos de pilares |
| `paper`   | `#F7F9FC` | Fondo claro                          |
| `line`    | `#DCE4F0` | Bordes y líneas de "libreta"         |

Para ajustar cualquier color, edítalo en `tailwind.config.js` — se actualiza en todo el sitio automáticamente.

## Pendiente antes de publicar

- Reemplaza `YOUR_ACCESS_KEY_HERE` en el formulario de contacto (`index.html`, sección `#contacto`) por tu clave real de [web3forms.com](https://web3forms.com) (gratis).
- Si quieres subir el logo en mejor calidad o cambiar su recorte, reemplaza `assets/logo.jpg`.
