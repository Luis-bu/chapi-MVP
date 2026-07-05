import { IconLeaf } from './icons.jsx'

function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="about-badge">
            <IconLeaf className="about-badge-icon" />
            Nosotros
          </span>
          <h2 className="about-title">Cocina tradicional colombiana, versión 100% vegetal</h2>
          <p className="about-text">
            En ChapiYork creemos que dejar de comer productos animales no significa renunciar a los
            sabores con los que crecimos. Por eso recreamos los platos típicos de Bogotá —changua,
            ajiaco, arepas y mucho más— usando solo ingredientes de origen vegetal, sin perder la
            esencia ni el sazón de la cocina colombiana de siempre. Fast food con conciencia, hecho
            con cariño en el corazón de Quinta Camacho.
          </p>
          <p className="about-credit">
            Cocina dirigida por{' '}
            <a href="https://instagram.com/elcocinaplantas" target="_blank" rel="noopener noreferrer">
              @elcocinaplantas
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
