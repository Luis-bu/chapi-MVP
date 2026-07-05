import { Link, useLocation } from 'react-router-dom'
import { WHATSAPP_URL, INSTAGRAM_URL } from '../constants.js'
import { IconWhatsapp, IconInstagram } from './icons.jsx'
import { track } from '../utils/track.js'

function Header() {
  const { pathname } = useLocation()

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-brand">
          <img src="/logo.jpg" alt="Logo de ChapiYork" className="header-logo" />
          ChapiYork
        </Link>

        <nav className="header-nav" aria-label="Navegación principal">
          <ul>
            <li>
              <Link to="/" className={pathname === '/' ? 'is-active' : ''}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/menu" className={pathname === '/menu' ? 'is-active' : ''}>
                Menú
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a
            className="btn btn-brutal btn-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram className="header-cta-icon" />
            <span className="header-cta-label">Instagram</span>
          </a>
          <a
            className="btn btn-brutal btn-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { location: 'header' })}
          >
            <IconWhatsapp className="header-cta-icon" />
            <span className="header-cta-label">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
