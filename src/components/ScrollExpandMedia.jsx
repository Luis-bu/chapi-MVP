import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function ScrollExpandMedia({
  mediaType = 'image',
  mediaSrc,
  mediaSrcMobile,
  posterSrc,
  title,
  tagline,
  date,
  scrollToExpand,
  decorationSrc,
  textBlend = false,
  splitIndex = 1,
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [isMobileState, setIsMobileState] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    if (query.matches) {
      setScrollProgress(1)
      setMediaFullyExpanded(true)
      setShowContent(true)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined

    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()
        const scrollDelta = e.deltaY * 0.0009
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }
      }
    }

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY)
    }

    const handleTouchMove = (e) => {
      if (!touchStartY) return

      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005
        const scrollDelta = deltaY * scrollFactor
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }

        setTouchStartY(touchY)
      }
    }

    const handleTouchEnd = () => {
      setTouchStartY(0)
    }

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [scrollProgress, mediaFullyExpanded, touchStartY, reducedMotion])

  useEffect(() => {
    const checkIfMobile = () => setIsMobileState(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1000)
  const mediaHeight = 380 + scrollProgress * (isMobileState ? 220 : 380)
  const textTranslate = scrollProgress * (isMobileState ? 140 : 130)

  const words = title ? title.split(' ') : []
  const firstChunk = words.slice(0, splitIndex).join(' ')
  const restChunk = words.slice(splitIndex).join(' ')

  return (
    <div ref={sectionRef} className="scroll-hero">
      <div className="scroll-hero-stage">
        <div className="scroll-hero-inner">
          <div className="scroll-hero-media-wrap">
            <div
              className="scroll-hero-media-frame"
              style={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
              }}
            >
              {mediaType === 'video' && !videoFailed ? (
                <div className="scroll-hero-media-inner">
                  <video
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="scroll-hero-media-el"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                    onError={(e) => {
                      // El error puede burbujear en fase de captura desde un <source> hijo que
                      // no matchea su `media` (candidato descartado, no es un fallo real) — solo
                      // el <video> mismo puede tener un MediaError genuino en `.error`.
                      if (e.target.tagName !== 'VIDEO') return
                      console.error('Hero video failed to load:', e.target.error)
                      setVideoFailed(true)
                    }}
                  >
                    {mediaSrcMobile && <source src={mediaSrcMobile} media="(max-width: 767px)" type="video/mp4" />}
                    <source src={mediaSrc} type="video/mp4" />
                  </video>
                  <motion.div
                    className="scroll-hero-media-veil"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0.45 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              ) : (
                <div className="scroll-hero-media-inner">
                  <img
                    src={mediaType === 'video' ? posterSrc : mediaSrc}
                    alt={title || 'ChapiYork'}
                    className="scroll-hero-media-el"
                  />
                  <motion.div
                    className="scroll-hero-media-veil"
                    initial={{ opacity: 0.55 }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.35 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )}

              {decorationSrc && (
                <img src={decorationSrc} alt="" className="scroll-hero-decoration" />
              )}

              <div className="scroll-hero-caption">
                {date && (
                  <p className="scroll-hero-eyebrow" style={{ transform: `translateX(-${textTranslate}vw)` }}>
                    {date}
                  </p>
                )}
                {scrollToExpand && !mediaFullyExpanded && (
                  <p className="scroll-hero-prompt" style={{ transform: `translateX(${textTranslate}vw)` }}>
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            <div className={`scroll-hero-title-row ${textBlend ? 'is-blended' : ''}`}>
              <motion.h1 className="scroll-hero-title" style={{ transform: `translateX(-${textTranslate}vw)` }}>
                {firstChunk}
              </motion.h1>
              <motion.h1 className="scroll-hero-title" style={{ transform: `translateX(${textTranslate}vw)` }}>
                {restChunk}
              </motion.h1>
            </div>

            {tagline && (
              <motion.p
                className="scroll-hero-tagline"
                initial={{ opacity: 1 }}
                animate={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}
                transition={{ duration: 0.2 }}
              >
                {tagline}
              </motion.p>
            )}
          </div>

          <motion.div
            className="scroll-hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ pointerEvents: showContent ? 'auto' : 'none' }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ScrollExpandMedia
