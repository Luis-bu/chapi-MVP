export const WHATSAPP_NUMBER = '573212590558'
export const WHATSAPP_MESSAGE = 'Hola, quiero hacer un pedido 🌱'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
export const PHONE_DISPLAY = '+57 321 2590558'

export const RATING_VALUE = 4.8
export const REVIEW_COUNT = 497
export const RATING_TEXT = `${RATING_VALUE}★ · ${REVIEW_COUNT} opiniones en Google`

export const INSTAGRAM_URL = 'https://instagram.com/chapiyork'

export const ADDRESS_STREET = 'Carrera 10A #69-35, Local 2'
export const ADDRESS_FULL = 'Carrera 10A #69-35, Quinta Camacho, Bogotá'
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=' + encodeURIComponent(ADDRESS_FULL) + '&output=embed'
export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(ADDRESS_FULL)

// PENDIENTE: reemplazar por el dominio real una vez comprado (ver README > Pre-lanzamiento).
// Usado tanto en las metaetiquetas de index.html como en el JSON-LD (inyectados en build
// desde vite.config.js) — cambiar solo aquí para actualizar ambos.
export const SITE_URL = 'https://chapiyork.com'
