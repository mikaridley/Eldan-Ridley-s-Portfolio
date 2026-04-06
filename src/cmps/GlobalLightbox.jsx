import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react'
import '../assets/styles/cmps/GlobalLightbox.css'

const LIGHTBOX_IMG_CLASSES = [
  'research-personas-img',
  'research-empathy-img',
  'ideation-mapping-img',
  'user-journey-mapping-img',
  'design-visual-identity-img',
  'design-hifi-final-img',
]

/** Visual zoom factor; pan range is derived so the full image stays reachable. */
const LIGHTBOX_ZOOM = 2.5

export function GlobalLightbox() {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  /** Second step: after open, user clicks the enlarged image to enable zoom + pan. */
  const [zoomMode, setZoomMode] = useState(false)
  const viewportRef = useRef(null)
  const imgRef = useRef(null)
  const maxPanRef = useRef({ x: 0, y: 0 })
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const updateMaxPan = useCallback(() => {
    const viewport = viewportRef.current
    const img = imgRef.current
    if (!viewport || !img) return
    const cw = viewport.clientWidth
    const ch = viewport.clientHeight
    const iw = img.offsetWidth
    const ih = img.offsetHeight
    const scaledW = iw * LIGHTBOX_ZOOM
    const scaledH = ih * LIGHTBOX_ZOOM
    maxPanRef.current = {
      x: Math.max(0, (scaledW - cw) / 2),
      y: Math.max(0, (scaledH - ch) / 2),
    }
  }, [])

  useEffect(() => {
    function onDocumentClick(e) {
      if (e.target.tagName !== 'IMG') return
      const hasAllowedClass = LIGHTBOX_IMG_CLASSES.some((cls) =>
        e.target.classList.contains(cls)
      )
      if (!hasAllowedClass) return
      e.preventDefault()
      e.stopPropagation()
      const src = e.target.currentSrc || e.target.src
      if (!src) return
      setLightboxSrc(src)
    }
    document.addEventListener('click', onDocumentClick, true)
    return () => document.removeEventListener('click', onDocumentClick, true)
  }, [])

  useEffect(() => {
    if (!lightboxSrc) return
    function onResize() {
      if (zoomMode) updateMaxPan()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [lightboxSrc, zoomMode, updateMaxPan])

  useEffect(() => {
    if (!lightboxSrc) return
    setZoomMode(false)
    setPan({ x: 0, y: 0 })
  }, [lightboxSrc])

  useLayoutEffect(() => {
    if (!lightboxSrc || !zoomMode) return
    const img = imgRef.current
    if (img?.complete) {
      updateMaxPan()
    }
  }, [lightboxSrc, zoomMode, updateMaxPan])

  useEffect(() => {
    setPan({ x: 0, y: 0 })
  }, [zoomMode])

  function close() {
    setLightboxSrc(null)
  }

  function onViewportMouseMove(e) {
    if (!zoomMode) return
    const viewport = viewportRef.current
    if (!viewport) return
    const rect = viewport.getBoundingClientRect()
    const mx = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    const my = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
    const { x: maxX, y: maxY } = maxPanRef.current
    setPan({
      x: (0.5 - mx) * 2 * maxX,
      y: (0.5 - my) * 2 * maxY,
    })
  }

  function onImgLoad() {
    if (zoomMode) updateMaxPan()
  }

  function onViewportClick(e) {
    e.stopPropagation()
    setZoomMode((z) => !z)
  }

  if (!lightboxSrc) return null

  return (
    <div
      className="global-lightbox"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={zoomMode ? 'Zoomed image' : 'Enlarged image'}
    >
      <div
        ref={viewportRef}
        className={
          'global-lightbox-viewport' + (zoomMode ? ' is-zoom-mode' : '')
        }
        onClick={onViewportClick}
        onMouseMove={zoomMode ? onViewportMouseMove : undefined}
      >
        <div
          className="global-lightbox-pan"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px)`,
          }}
        >
          <img
            ref={imgRef}
            src={lightboxSrc}
            alt="Enlarged"
            onLoad={onImgLoad}
            className="global-lightbox-img"
            style={{
              transform: zoomMode ? `scale(${LIGHTBOX_ZOOM})` : 'none',
              transformOrigin: 'center center',
            }}
          />
        </div>
      </div>
    </div>
  )
}
