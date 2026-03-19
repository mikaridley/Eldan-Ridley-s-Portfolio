import { useState, useRef, useEffect, useMemo } from 'react'
import '../assets/styles/cmps/ImgsCarousel.css'
import carouselArrowSvg from '../assets/imgs/quantex/Carousel Arrow.svg'

export function ImgsCarousel({ images = [], gap = 15 }) {
  const [currentIndex, setCurrentIndex] = useState(() => images.length)
  const [slideWidths, setSlideWidths] = useState([])
  const [slideHeight, setSlideHeight] = useState(550)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [dragOffsetX, setDragOffsetX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const pointerIdRef = useRef(null)
  const viewportRef = useRef(null)
  const naturalDimensionsRef = useRef({})
  const isAnimatingRef = useRef(false)
  const animTimeoutRef = useRef(null)
  const currentIndexRef = useRef(currentIndex)
  const dragStartClientXRef = useRef(0)
  const n = images.length
  // 3 copies: we animate inside the extended track, then snap back to the
  // middle copy after the transition ends.
  const displayImages = n > 0 ? [...images, ...images, ...images] : []

  function getSlideWidth(idx) {
    return slideWidths[idx] ?? slideHeight
  }

  const offsetByIndex = useMemo(() => {
    const offsets = [0]
    for (let i = 0; i < displayImages.length; i++) {
      const w = getSlideWidth(i)
      offsets.push(offsets[i] + w + gap)
    }
    return offsets
  }, [displayImages.length, slideWidths, gap])

  function calcTranslateXCenteredForIndex(idx) {
    const off = offsetByIndex[idx] ?? 0
    const w = getSlideWidth(idx)
    return viewportWidth ? (viewportWidth - w) / 2 - off : -off
  }

  // Center the active slide in the viewport (x-axis), regardless of screen size.
  const translateXCentered = calcTranslateXCenteredForIndex(currentIndex)
  const translateX = translateXCentered
  const translateXWithDrag = translateX + dragOffsetX

  function handleImageLoad(idx, e) {
    const { naturalWidth: w, naturalHeight: h } = e.target
    if (!w || !h) return
    naturalDimensionsRef.current[idx] = { w, h }
    const slideH = slideHeight
    setSlideWidths((prev) => {
      const next = [...prev]
      next[idx] = slideH * (w / h)
      return next
    })
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const h = entry?.contentRect?.height
      const w = entry?.contentRect?.width
      if (typeof h === 'number' && h > 0) {
        setSlideHeight(h)
      }
      if (typeof w === 'number' && w > 0) {
        setViewportWidth(w)
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const dims = naturalDimensionsRef.current
    const h = slideHeight
    setSlideWidths((prev) => {
      const next = []
      for (let i = 0; i < displayImages.length; i++) {
        const d = dims[i]
        next[i] = d ? h * (d.w / d.h) : (prev[i] ?? slideHeight)
      }
      return next.length ? next : prev
    })
  }, [slideHeight, displayImages.length])

  useEffect(() => {
    if (images.length === 0) {
      setSlideWidths([])
      naturalDimensionsRef.current = {}
    }

    // If the carousel content changes, reset looping state so indexes stay valid.
    setCurrentIndex(images.length)
    setDragOffsetX(0)
    setIsTransitioning(true)
    isAnimatingRef.current = false
  }, [images.length])

  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current)
        animTimeoutRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  function armAnimUnlock() {
    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current)
      animTimeoutRef.current = null
    }
    animTimeoutRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false
      animTimeoutRef.current = null
    }, 360)
  }

  function handleTransitionEnd() {
    if (n === 0) return

    const endedIndex = currentIndexRef.current

    // Snap the index back into the middle copy to keep infinite looping.
    // - middle copy range: [n .. 2n-1]
    if (endedIndex < n) {
      // We moved left into the first copy (only possible target: n-1),
      // snap back to the same slide in the middle copy.
      setIsTransitioning(false)
      setCurrentIndex(2 * n - 1)
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current)
        animTimeoutRef.current = null
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
          isAnimatingRef.current = false
        })
      })
      return
    }

    if (endedIndex >= 2 * n) {
      // We moved right into the third copy (only possible target: 2n),
      // snap back to the same slide in the middle copy.
      setIsTransitioning(false)
      setCurrentIndex(n)
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current)
        animTimeoutRef.current = null
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
          isAnimatingRef.current = false
        })
      })
      return
    }

    isAnimatingRef.current = false
    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current)
      animTimeoutRef.current = null
    }
  }

  function goPrev() {
    if (n === 0 || isAnimatingRef.current) return
    isAnimatingRef.current = true
    armAnimUnlock()
    const minIndex = n - 1
    const next = Math.max(currentIndexRef.current - 1, minIndex)
    currentIndexRef.current = next
    setCurrentIndex(next)
  }

  function goNext() {
    if (n === 0 || isAnimatingRef.current) return
    isAnimatingRef.current = true
    armAnimUnlock()
    const maxIndex = 2 * n
    const next = Math.min(currentIndexRef.current + 1, maxIndex)
    currentIndexRef.current = next
    setCurrentIndex(next)
  }

  function onPointerDown(e) {
    if (n === 0) return
    // Only treat touch/pen as drag; ignore mouse to keep desktop UX stable.
    if (e.pointerType === 'mouse') return

    pointerIdRef.current = e.pointerId
    dragStartClientXRef.current = e.clientX
    setDragOffsetX(0)
    setIsDragging(true)

    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {}
  }

  function onPointerMove(e) {
    if (!isDragging) return
    if (pointerIdRef.current !== e.pointerId) return

    const deltaX = e.clientX - dragStartClientXRef.current
    setDragOffsetX(deltaX)
  }

  function finishDrag(e) {
    if (!isDragging) return
    if (pointerIdRef.current !== e.pointerId) return

    const deltaX = e.clientX - dragStartClientXRef.current
    const swipeThresholdPx = 45

    setIsDragging(false)
    setDragOffsetX(0)

    if (Math.abs(deltaX) < swipeThresholdPx) return
    if (deltaX < 0) goNext()
    else goPrev()
  }

  function onPointerUp(e) {
    finishDrag(e)
  }

  function onPointerCancel(e) {
    finishDrag(e)
  }

  if (!images.length) return null

  return (
    <div className="imgs-carousel">
      <div
        className="imgs-carousel-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="imgs-carousel-track"
          style={{
            transform: `translateX(${translateXWithDrag}px)`,
            gap: `${gap}px`,
            transition:
              isDragging || !isTransitioning ? 'none' : 'transform 0.3s ease',
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
