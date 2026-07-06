# ChapiYork — Landing page

Landing de una sola página para ChapiYork, restaurante de comida rápida 100% vegana en Quinta Camacho, Bogotá. MVP de demo construido con Vite + React y CSS propio (sin librerías de UI).

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Los archivos generados quedan en `dist/`.

## Deploy en Vercel

1. Sube este repo a GitHub.
2. En [vercel.com](https://vercel.com), importa el repositorio. Vercel detecta automáticamente que es un proyecto Vite (build command `npm run build`, output `dist`) — no requiere configuración adicional.
3. Deploy.

Alternativa por CLI:

```bash
npm i -g vercel
vercel --prod
```

## Assets

Todos los assets viven dentro del repo (cero rutas locales de máquina, cero CDNs de terceros para
contenido del sitio — la única excepción es el embed en vivo de Google Maps en `Location.jsx`, que
es un servicio, no contenido).

### Estructura de carpetas

```
public/                    Solo lo que necesita URL fija (referenciado por ruta absoluta, no por import)
  favicon.ico
  apple-touch-icon.png
  og-image.jpg
  robots.txt
  sitemap.xml
  logo-transparent.png    Sticker del logo (PNG con transparencia) — header y decoración del hero

src/assets/                 Todo lo demás, importado desde componentes con el alias @ (→ src/)
  brand/
    logo.jpg                Logo real de ChapiYork (Header, Footer)
  platos/
    changua-el-dorado.jpg   PLACEHOLDER — ver "Placeholders pendientes"
    chapiyorker.jpg         PLACEHOLDER
    trilogia-de-fritos.jpg  PLACEHOLDER
  local/                    Vacía (solo .gitkeep) — ver "Placeholders pendientes"
  video/
    hero.mp4                Video real del hero (variante desktop)
    hero-mobile.mp4         Video real del hero (variante mobile, servida bajo 767px)
    hero-poster.jpg         Primer frame del video, real (poster + fallback si el video falla)
  fonts/
    baloo-2-variable.woff2  Baloo 2, pesos 500–800 (variable font, un solo archivo cubre el rango)
    poppins-400.woff2
    poppins-500.woff2
    poppins-600.woff2
    poppins-700.woff2
```

### Convención de nombres

kebab-case descriptivo en español, sin tildes ni espacios, sin nombres genéricos de cámara/captura
(`IMG_2034`, `captura-de-pantalla`, etc.) — el nombre debe decir qué es (`changua-el-dorado.jpg`,
no `foto3.jpg`).

### Por qué `public/` vs `src/assets/`

- `public/` es para lo que necesita una **URL fija y predecible** independiente del hash de build:
  `favicon.ico` (referenciado por convención del navegador), `robots.txt`/`sitemap.xml` (deben vivir
  en la raíz del dominio), `og-image.jpg` (la URL va hardcodeada en meta tags que a veces cachean
  crawlers externos).
- `src/assets/` es para todo lo que un componente importa (`import logo from '@/assets/brand/logo.jpg'`).
  Vite lo procesa, lo agrega al hash del build y falla el build si el archivo no existe — evita
  referencias rotas silenciosas.

### Fuentes (self-hosted)

Baloo 2 y Poppins se cargaban antes desde `fonts.googleapis.com` (dependencia externa). Ahora se
sirven desde `src/assets/fonts/` vía `@font-face` en `src/index.css`, subset `latin` únicamente
(cubre español: á, é, í, ó, ú, ñ, ü, ·, etc. — todos están en el rango `U+0000-00FF`). Si en algún
momento el sitio necesita otro idioma/alfabeto, hay que volver a descargar el subset correspondiente
desde Google Fonts y agregar el `@font-face` con su `unicode-range`.

### Video del hero — cómo regenerarlo

El video real es "Picada Mundialista Vegana x ChapiYork". El archivo original (97s, 640px, 11.7MB)
se recortó a un loop de 10s y se generaron 2 variantes livianas:

```bash
# Desktop (~720px de ancho, ~2.1MB) → src/assets/video/hero.mp4
ffmpeg -i original.mp4 -t 10 -an -vf "scale=720:-2,fps=24" \
  -c:v libx264 -preset slow -crf 26 -movflags +faststart -pix_fmt yuv420p hero.mp4

# Mobile (~480px de ancho, ~0.7MB) → src/assets/video/hero-mobile.mp4
ffmpeg -i original.mp4 -t 10 -an -vf "scale=480:-2,fps=24" \
  -c:v libx264 -preset slow -crf 30 -movflags +faststart -pix_fmt yuv420p hero-mobile.mp4

# Poster (primer frame de la variante desktop) → src/assets/video/hero-poster.jpg
ffmpeg -i hero.mp4 -vframes 1 -q:v 3 hero-poster.jpg
```

Si el dueño sube un video de reemplazo, correr estos 3 comandos con el archivo nuevo como
`original.mp4` (ajustar `-t` si el clip fuente es más corto que 10s).

`public/og-image.jpg` (1200×630), `public/favicon.ico` y `public/apple-touch-icon.png` (180×180)
están generados a partir de `logo.jpg` (fondo naranja `#D9863A` + logo centrado para el og-image).
Son placeholders razonables para la demo — reemplazar `og-image.jpg` por arte real antes de publicar
(ver "Pre-lanzamiento").

### Placeholders pendientes (reemplazar con material real del cliente)

| Archivo | Qué es hoy | Medida recomendada |
|---|---|---|
| `src/assets/platos/changua-el-dorado.jpg` | Placeholder generado (fondo de color + texto) | Mínimo 800×800, foto real del plato |
| `src/assets/platos/chapiyorker.jpg` | Placeholder generado | Mínimo 800×800, foto real del plato |
| `src/assets/platos/trilogia-de-fritos.jpg` | Placeholder generado | Mínimo 800×800, foto real del plato |
| `src/assets/local/` | Carpeta vacía (solo `.gitkeep`) | 1–3 fotos del ambiente/local, mínimo 1600×1200 (aún sin sección asignada en el diseño — decidir dónde va antes de agregarlas) |
| `public/og-image.jpg` | Logo sobre fondo de color | 1200×630, pieza gráfica real para compartir en redes |

## Estructura de rutas

- `/` — landing: hero, 3 platos destacados (con efecto spotlight que sigue el cursor), Nosotros, reseñas (carrusel marquee) y ubicación.
- `/menu` — carta completa, con nav de categorías sticky y tarjetas por plato. Toda la data vive en `src/data/menu.js`, cuya fuente editable es `menu-chapiyork.md` en la raíz del repo (actualizar ahí primero).
- Cualquier ruta no reconocida redirige a `/`.

## SEO técnico

- **Metadatos** (`index.html`): title, meta description, Open Graph completo (incluye `og:image` apuntando a `/og-image.jpg`), Twitter Card `summary_large_image` y `<link rel="canonical">`.
- **JSON-LD (`schema.org/Restaurant`)**: no está hardcodeado en `index.html` — se genera en build/dev desde `src/constants.js` (rating, teléfono, dirección, Instagram, Maps) y `src/data/info.js` (horarios), inyectado vía un plugin de Vite (`seoDataPlugin` en `vite.config.js`) que reemplaza los tokens `__JSONLD_SCHEMA__` y `__SITE_URL__` en el HTML. **Si cambian el rating, el teléfono, la dirección o los horarios, solo hay que editar `constants.js`/`info.js` — el JSON-LD se regenera solo, no hay que tocar el HTML.**
  - Excepción documentada: el bloque `openingHoursSpecification` solo cubre "Lunes a jueves" y "Viernes y sábado" (mapeados a `DayOfWeek` de schema.org). "Domingos" (cerrado) se omite a propósito, y "Festivos" no se incluye porque schema.org no tiene un tipo limpio para feriados recurrentes — forzarlo habría sido un dato incorrecto.
- **`public/robots.txt`** y **`public/sitemap.xml`**: son archivos estáticos, **no** se generan desde `constants.js`. Si cambia `SITE_URL`, hay que actualizar el dominio a mano en esos dos archivos también.
- **Dominio placeholder:** todo (canonical, og:url, JSON-LD `url`/`sameAs`, robots.txt, sitemap.xml) usa `https://chapiyork.com` como marcador de posición — reemplazar por el dominio real una vez comprado (`SITE_URL` en `src/constants.js` cubre la mayoría; robots.txt/sitemap.xml se editan aparte).

## Rendimiento

- Video del hero: `preload="metadata"`, `muted`, `playsinline`, poster estático instantáneo, variantes por viewport (ver arriba), y fallback automático a solo-imagen si el video falla (`onError`, que además loguea el `MediaError` real en consola para diagnóstico).
- `loading="lazy"` en las imágenes reales bajo el fold (logo del footer). El logo del header, el video/imagen del hero y los 3 platos destacados de la landing quedan `eager` a propósito (above/near the fold); el resto queda `lazy`.
- Bundle JS: ~342KB sin comprimir / **~112KB gzip** (bien debajo del límite de 300KB gzip) — no fue necesario aplicar code-splitting por ruta.

## Medición

- `@vercel/analytics` instalado y montado (`<Analytics />` en `src/main.jsx`). Solo reporta datos reales una vez desplegado en Vercel.
- `src/utils/track.js` expone `track(eventName, props)`. Eventos instrumentados:
  - `whatsapp_click` con `{ location: 'header' | 'hero' | 'ubicacion' | 'flotante' | 'menu' }` en los 5 puntos de contacto por WhatsApp.
  - `menu_view` al montar la ruta `/menu`.
  - `como_llegar_click` en el botón "Cómo llegar" (Google Maps) de Ubicación.

## Pendientes de confirmar con el dueño

- Varios platos del menú real llevan ícono de "sin gluten" en Instagram (empanada, carimañola, arepas, pan de yuca, trilogía, patacón, alitas chipotle). El campo `glutenFree` en `src/data/menu.js` está en `false` para todos — verificar con el dueño antes de activarlo por plato.
- Los horarios en `src/data/info.js` (`hours`) son un estimado — confirmar antes de publicar el sitio (recuerda que también alimentan el JSON-LD, ver "SEO técnico").

(Para los placeholders de imágenes pendientes de reemplazar — fotos de platos, ambiente del local, og-image — ver la sección "Assets" arriba.)

## Pre-lanzamiento

Lo que queda por hacer manualmente, fuera del código:

- [ ] Comprar el dominio real y reemplazar `SITE_URL` en `src/constants.js` + el dominio hardcodeado en `public/robots.txt` y `public/sitemap.xml`.
- [ ] Conectar el repo a Vercel (o el dominio comprado al proyecto ya desplegado).
- [ ] Registrar el sitio en Google Search Console y enviar `sitemap.xml`.
- [ ] Vincular la web en el perfil de Google Business del cliente.
- [ ] Reemplazar `public/og-image.jpg` (placeholder) por una pieza gráfica real.
- [ ] Confirmar con el dueño: horarios (`src/data/info.js`), platos sin gluten (`src/data/menu.js`) y subir las 3 fotos de platos destacados.
# chapi-MVP
