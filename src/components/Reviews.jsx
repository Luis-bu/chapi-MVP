import { useEffect, useState } from 'react'
import { IconStar } from './icons.jsx'
import { reviews } from '../data/reviews.js'
import { RATING_TEXT } from '../constants.js'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const handler = (e) => setReduced(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return reduced
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-stars" aria-label={`${review.stars} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} className="review-star" filled={i < review.stars} />
        ))}
      </div>
      <p className="review-quote">"{review.quote}"</p>
      <div className="review-footer">
        <span className="review-author">{review.name}</span>
        <span className="review-source">Reseña de Google</span>
      </div>
    </article>
  )
}

function Reviews() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="section reviews">
      <div className="container">
        <span className="eyebrow-tag">{RATING_TEXT}</span>
        <h2 className="section-title">Lo que dicen en Google</h2>
        <p className="section-subtitle">Reseñas reales de clientes en Google.</p>
      </div>

      {prefersReducedMotion ? (
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review) => (
              <ReviewCard review={review} key={review.name} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="reviews-marquee"
          onTouchStart={(e) => e.currentTarget.classList.add('is-paused')}
          onTouchEnd={(e) => e.currentTarget.classList.remove('is-paused')}
        >
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard review={review} key={`${review.name}-${i}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews
