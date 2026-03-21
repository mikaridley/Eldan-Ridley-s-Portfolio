import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import logoBlack from '../assets/imgs/logo-black.png'
import burgerIcon from '../assets/imgs/Burger menu.svg'
import burgerIconLight from '../assets/imgs/Burger menu - light.svg'
import closeIcon from '../assets/imgs/Close Icon.svg'
import resumePdf from '../assets/files/Eldan Ridley UX Designer Resume.pdf'
import '../assets/styles/cmps/AppHeader.css'

export function AppHeader() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isProjectPage = pathname === '/quantex' || pathname === '/kindred'
  const isLightLogo = isProjectPage && !isMenuOpen
  const logoSrc = isLightLogo ? logo : logoBlack
  const burgerSrc = isProjectPage ? burgerIconLight : burgerIcon

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
    { to: '/home', label: 'Home', isExternal: false },
    { to: '/about-me', label: 'About me', isExternal: false },
    {
      href: resumePdf,
      label: 'Resume',
      isExternal: true,
    },
    {
      href: 'https://www.linkedin.com/in/eldan-ridley',
      label: 'LinkedIn',
      isExternal: true,
    },
  ]

  return (
    <>
      <header className="app-header">
        <NavLink to="/home" className="app-header-logo logo" aria-label="Go to home">
          <img src={logoSrc} alt="Logo" />
        </NavLink>
        <nav className="app-header-navigation navigation">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {link.label}
                </a>
              )
            }

            return (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            )
          })}
        </nav>
        <button
          type="button"
          className={`app-header-burger-btn ${isMenuOpen ? 'is-open' : ''}`}
          onClick={isMenuOpen ? closeMenu : openMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <img src={closeIcon} className="app-header-close-icon"/>
          ) : (
            <img src={burgerSrc} alt="" />
          )}
        </button>
      </header>

      <div
        className={`app-header-overlay ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="app-header-overlay-inner">
          <nav className="app-header-overlay-nav">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
