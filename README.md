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


