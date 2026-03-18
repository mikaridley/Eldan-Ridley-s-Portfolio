import { useState, useRef, useEffect, useMemo } from 'react'
import '../assets/styles/cmps/ImgsCarousel.css'
import carouselArrowSvg from '../assets/imgs/quantex/Carousel Arrow.svg'

export function ImgsCarousel({ images = [], gap = 15 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidths, setSlideWidths] = useState([])
  const [slideHeight, setSlideHeight] = useState(550)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [dragOffsetX, setDragOffsetX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const pointerIdRef = useRef(null)
  const viewportRef = useRef(null)
  const naturalDimensionsRef = useRef({})
  const isAnimatingRef = useRef(false)
  const dragStartClientXRef = useRef(0)
  const n = images.length
  const displayImages = n > 0 ? [...images, ...images] : []

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

  const translateX = -offsetByIndex[currentIndex] ?? 0
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
      if (typeof h === 'number' && h > 0) {
        setSlideHeight(h)
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
