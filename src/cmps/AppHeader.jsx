import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import logoBlack from '../assets/imgs/logo-black.png'
import burgerIcon from '../assets/imgs/Burger menu.svg'
import '../assets/styles/cmps/AppHeader.css'

export function AppHeader() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLightLogo = pathname === '/quantex' || pathname === '/kindred'
  const logoSrc = isLightLogo ? logo : logoBlack

  function openMenu() {
    setIsMenuOpen(true)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/about-me', label: 'About me' },
    { to: '/resume', label: 'Resume' },
    { to: '/linkedin', label: 'LinkedIn' },
  ]

  return (
    <>
      <header className="app-header">
        <div className="app-header-logo logo">
          <img src={logoSrc} alt="Logo" />
        </div>
        <nav className="app-header-navigation navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className={`app-header-burger-btn ${isMenuOpen ? 'is-open' : ''}`}
          onClick={isMenuOpen ? closeMenu : openMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <span className="app-header-close-icon" aria-hidden>×</span>
          ) : (
            <img src={burgerIcon} alt="" />
          )}
        </button>
      </header>

      <div
        className={`app-header-overlay ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="app-header-overlay-inner">
          <nav className="app-header-overlay-nav">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
