import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
