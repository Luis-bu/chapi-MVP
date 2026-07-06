import { PHONE_DISPLAY } from '../constants.js'
import { IconInstagram, IconFacebook } from './icons.jsx'
import logo from '@/assets/brand/logo.jpg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Logo de ChapiYork" className="footer-logo" loading="lazy" />
          ChapiYork
        </div>

        <nav className="footer-social" aria-label="Redes sociales">
          <a href="https://instagram.com/chapiyork" target="_blank" rel="noopener noreferrer">
            <IconInstagram className="footer-social-icon" />
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <IconFacebook className="footer-social-icon" />
            Facebook
          </a>
        </nav>

        <p className="footer-phone">{PHONE_DISPLAY}</p>

        <p className="footer-copy">
          © {new Date().getFullYear()} ChapiYork · Plant Based Fast Food. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
