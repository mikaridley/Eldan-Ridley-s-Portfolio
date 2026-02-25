import { useState, useEffect } from 'react'
import '../assets/styles/cmps/GlobalLightbox.css'

const LIGHTBOX_IMG_CLASSES = [
  'research-personas-img',
  'research-empathy-img',
  'ideation-mapping-img',
  'design-visual-identity-img',
  'design-hifi-final-img',
]

export function GlobalLightbox() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  useEffect(() => {
    const onDocumentClick = (e) => {
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

  const close = () => setLightboxSrc(null)

  if (!lightboxSrc) return null

  return (
    <div
      className="global-lightbox"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
    >
      <img
        src={lightboxSrc}
        alt="Enlarged"
        onClick={(e) => e.stopPropagation()}
        className="global-lightbox-img"
      />
    </div>
  )
}
