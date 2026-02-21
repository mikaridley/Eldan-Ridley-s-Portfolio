import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import logoBlack from '../assets/imgs/logo-black.png'

export function AppHeader() {
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === '/home'
  const logoSrc = isHome ? logo : logoBlack

  return (
    <header className="app-header">
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>
      <nav className="navigation">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/linkedin">LinkedIn</NavLink>
      </nav>
    </header>
  )
}
