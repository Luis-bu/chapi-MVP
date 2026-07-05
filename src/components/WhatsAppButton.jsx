import { WHATSAPP_URL } from '../constants.js'
import { IconWhatsapp } from './icons.jsx'
import { track } from '../utils/track.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pide por WhatsApp"
      onClick={() => track('whatsapp_click', { location: 'flotante' })}
    >
      <IconWhatsapp className="whatsapp-float-icon" />
    </a>
  )
}

export default WhatsAppButton
