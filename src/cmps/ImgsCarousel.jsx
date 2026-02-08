import { useState, useRef, useEffect } from 'react'
import '../assets/styles/cmps/ImgsCarousel.css'

const GAP = 12
const VISIBLE_COUNT = 4

export function ImgsCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const viewportRef = useRef(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const updateSlideWidth = () => {
      const totalGap = (VISIBLE_COUNT - 1) * GAP
      const w = (el.offsetWidth - totalGap) / VISIBLE_COUNT
      setSlideWidth(w)
    }
    updateSlideWidth()
    const ro = new ResizeObserver(updateSlideWidth)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const goPrev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const goNext = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  const translateX = slideWidth > 0 ? -currentIndex * (slideWidth + GAP) : 0

  if (!images.length) return null

  return (
    <div className="imgs-carousel">
      <div className="imgs-carousel-viewport" ref={viewportRef}>
        <div
          className="imgs-carousel-track"
          style={{
            transform: `translateX(${translateX}px)`,
            gap: `${GAP}px`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="imgs-carousel-slide"
              style={{ width: slideWidth > 0 ? `${slideWidth}px` : undefined }}
            >
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="imgs-carousel-arrows">
        <button
          type="button"
          className="imgs-carousel-arrow imgs-carousel-arrow--left"
          onClick={goPrev}
          aria-label="Previous"
        >
          <span className="imgs-carousel-arrow-icon">‹</span>
        </button>
        <button
          type="button"
          className="imgs-carousel-arrow imgs-carousel-arrow--right"
          onClick={goNext}
          aria-label="Next"
        >
          <span className="imgs-carousel-arrow-icon">›</span>
        </button>
      </div>
    </div>
  )
}
