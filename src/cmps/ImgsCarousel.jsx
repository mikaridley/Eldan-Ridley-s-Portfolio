import { useState, useRef, useEffect, useMemo } from 'react'
import '../assets/styles/cmps/ImgsCarousel.css'
import carouselArrowSvg from '../assets/imgs/quantex/Carousel Arrow.svg'

const SLIDE_HEIGHT = 550

export function ImgsCarousel({ images = [], gap = 15 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidths, setSlideWidths] = useState([])
  const [isTransitioning, setIsTransitioning] = useState(true)
  const viewportRef = useRef(null)
  const isAnimatingRef = useRef(false)
  const n = images.length
  const displayImages = n > 0 ? [...images, ...images] : []

  function getSlideWidth(idx) {
    return slideWidths[idx] ?? SLIDE_HEIGHT
  }

  const offsetByIndex = useMemo(() => {
    const offsets = [0]
    for (let i = 0; i < displayImages.length; i++) {
      const w = getSlideWidth(i)
      offsets.push(offsets[i] + w + gap)
    }
    return offsets
  }, [displayImages.length, slideWidths, gap])

  const translateX = -offsetByIndex[currentIndex] ?? 0

  function handleImageLoad(idx, e) {
    const { naturalWidth, naturalHeight } = e.target
    if (!naturalWidth || !naturalHeight) return
    const w = SLIDE_HEIGHT * (naturalWidth / naturalHeight)
    setSlideWidths((prev) => {
      const next = [...prev]
      next[idx] = w
      return next
    })
  }

  useEffect(() => {
    if (images.length === 0) setSlideWidths([])
  }, [images.length])

  function handleTransitionEnd() {
    if (n === 0) return
    if (currentIndex >= n) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex % n)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
          isAnimatingRef.current = false
        })
      })
    } else {
      isAnimatingRef.current = false
    }
  }

  function goPrev() {
    if (n === 0 || isAnimatingRef.current) return
    isAnimatingRef.current = true
    if (currentIndex === 0) {
      setIsTransitioning(false)
      setCurrentIndex(displayImages.length - 1)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
          isAnimatingRef.current = false
        })
      })
    } else {
      setCurrentIndex((i) => i - 1)
    }
  }

  function goNext() {
    if (n === 0 || isAnimatingRef.current) return
    isAnimatingRef.current = true
    if (currentIndex === displayImages.length - 1) {
      setIsTransitioning(false)
      setCurrentIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
          isAnimatingRef.current = false
        })
      })
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  if (!images.length) return null

  return (
    <div className="imgs-carousel">
      <div className="imgs-carousel-viewport" ref={viewportRef}>
        <div
          className="imgs-carousel-track"
          style={{
            transform: `translateX(${translateX}px)`,
            gap: `${gap}px`,
            transition: isTransitioning ? 'transform 0.3s ease' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayImages.map((src, idx) => (
            <div
              key={idx}
              className="imgs-carousel-slide"
              style={{ width: `${getSlideWidth(idx)}px` }}
            >
              <img
                src={src}
                alt={`Slide ${(idx % n) + 1}`}
                onLoad={(e) => handleImageLoad(idx, e)}
              />
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
          <img src={carouselArrowSvg} alt="" className="imgs-carousel-arrow-icon" />
        </button>
        <button
          type="button"
          className="imgs-carousel-arrow imgs-carousel-arrow--right"
          onClick={goNext}
          aria-label="Next"
        >
          <img src={carouselArrowSvg} alt="" className="imgs-carousel-arrow-icon" />
        </button>
      </div>
    </div>
  )
}
