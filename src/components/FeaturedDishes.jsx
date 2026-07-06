import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { featuredDishes } from '../data/menu.js'
import changuaElDoradoImg from '@/assets/platos/changua-el-dorado.jpg'
import chapiyorkerImg from '@/assets/platos/chapiyorker.jpg'
import trilogiaDeFritosImg from '@/assets/platos/trilogia-de-fritos.jpg'

const tilt = ['tilt-l', 'tilt-r', 'tilt-l']

const dishImages = {
  'changua-el-dorado': changuaElDoradoImg,
  chapiyorker: chapiyorkerImg,
  'trilogia-de-fritos': trilogiaDeFritosImg,
}

function useSpotlight(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const canSpotlight =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canSpotlight) return undefined

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
      el.classList.add('spotlight-active')
    }
    const handleLeave = () => el.classList.remove('spotlight-active')

    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerleave', handleLeave)

    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
    }
  }, [ref])
}

function FeaturedCard({ dish, index }) {
  const ref = useRef(null)
  useSpotlight(ref)

  return (
    <article ref={ref} className={`menu-card menu-card-featured ${tilt[index]}`}>
      <div className="menu-card-image">
        <img src={dishImages[dish.slug]} alt={dish.name} className="menu-card-image-el" loading="eager" />
      </div>
      <div className="menu-card-body">
        <span className="menu-card-featured-tag">{dish.badge}</span>
        <h3 className="menu-card-name">{dish.name}</h3>
        <p className="menu-card-desc">{dish.desc}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">${dish.price} COP</span>
        </div>
      </div>
    </article>
  )
}

function FeaturedDishes() {
  return (
    <section id="menu" className="section menu">
      <div className="container">
        <span className="eyebrow-tag">Al pedido</span>
        <h2 className="section-title">Nuestro menú</h2>
        <p className="section-subtitle">
          Clásicos colombianos reinventados, sin sacrificar el sabor de toda la vida. Estos son los 3
          que todo el mundo pide.
        </p>

        <div className="menu-featured-grid">
          {featuredDishes.map((dish, index) => (
            <FeaturedCard dish={dish} index={index} key={dish.slug} />
          ))}
        </div>

        <div className="menu-cta-row">
          <Link className="btn btn-brutal btn-ghost" to="/menu">
            Ver menú completo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDishes
