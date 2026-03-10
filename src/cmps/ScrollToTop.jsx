import { useLayoutEffect, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTopInstant } from '../utils/scrollToTop'
import '../assets/styles/cmps/ScrollToTop.css'
import backToTopImg from '../assets/imgs/quantex/Back to top.png'

const SCROLL_THRESHOLD = 300

export function ScrollToTop() {
  const { pathname } = useLocation()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useLayoutEffect(() => {
    scrollToTopInstant()
  }, [pathname])

  useEffect(() => {
    function onScroll() {
      setShowButton(window.scrollY > SCROLL_THRESHOLD)
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
      onClick={onScrollToTop}
      aria-label="Scroll to top"
    >
      <img src={backToTopImg} alt="" className="scroll-to-top-img" />
    </button>
  )
}
