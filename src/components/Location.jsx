import { IconPin, IconInstagram, IconWhatsapp } from './icons.jsx'
import Hours from './Hours.jsx'
import { track } from '../utils/track.js'
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  MAPS_EMBED_SRC,
  MAPS_DIRECTIONS_URL,
  ADDRESS_STREET,
} from '../constants.js'

function Location() {
  return (
    <section id="ubicacion" className="section location">
      <div className="container">
        <span className="eyebrow-tag">Visítanos</span>
        <h2 className="section-title">Ubicación y horarios</h2>

        <div className="location-inner">
          <Hours />

          <div className="location-place">
            <div className="location-block">
              <h3 className="location-block-title">
                <IconPin className="location-block-icon" />
                Dirección
              </h3>
              <p className="location-address">
                {ADDRESS_STREET}
                <br />
                Quinta Camacho, Bogotá
              </p>
            </div>

            <div className="location-map">
              <iframe
                src={MAPS_EMBED_SRC}
                title="Ubicación de ChapiYork en Quinta Camacho, Bogotá"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="location-actions">
              <a
                className="btn btn-brutal btn-cta"
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('como_llegar_click')}
              >
                Cómo llegar
              </a>
              <a
                className="btn btn-brutal btn-ghost"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_click', { location: 'ubicacion' })}
              >
                <IconWhatsapp className="location-action-icon" />
                WhatsApp
              </a>
              <a className="btn btn-brutal btn-ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram className="location-action-icon" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
