import Hero from '../components/Hero.jsx'
import FeaturedDishes from '../components/FeaturedDishes.jsx'
import About from '../components/About.jsx'
import Reviews from '../components/Reviews.jsx'
import Location from '../components/Location.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

function Landing() {
  usePageTitle('ChapiYork · Comida rápida 100% vegana en Chapinero, Bogotá')

  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Reviews />
      <Location />
      <About />
    </>
  )
}

export default Landing
