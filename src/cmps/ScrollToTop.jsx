import { useLayoutEffect, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTopInstant } from '../utils/scrollToTop'
import '../assets/styles/cmps/ScrollToTop.css'
import backToTopImg from '../assets/imgs/quantex/Back to top.png'

const SCROLL_THRESHOLD = 600
const BASE_BOTTOM_PX = 24
const FOOTER_GUARD_PX = 210
const MOBILE_FOOTER_GUARD_PX = 100

export function ScrollToTop() {
  const { pathname } = useLocation()
  const [showButton, setShowButton] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(BASE_BOTTOM_PX)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useLayoutEffect(() => {
    scrollToTopInstant()
  }, [pathname])

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      setShowButton(scrollY > SCROLL_THRESHOLD)

      const isMobile = window.innerWidth < 810
      const footerGuardPx = isMobile ? MOBILE_FOOTER_GUARD_PX : FOOTER_GUARD_PX

      const overlap =
        scrollY + viewportHeight - (docHeight - footerGuardPx)

      const extraOffset = overlap > 0 ? overlap : 0
      setBottomOffset(BASE_BOTTOM_PX + extraOffset)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function onScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hideOnPages = ['/home', '/about-me']
  if (!showButton || hideOnPages.includes(pathname)) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      style={{ bottom: `${bottomOffset}px` }}
      onClick={onScrollToTop}
      aria-label="Scroll to top"
    >
      <img src={backToTopImg} alt="" className="scroll-to-top-img" />
    </button>
  )
}
