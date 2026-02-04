import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/linkedin">LinkedIn</Link>
      </nav>
    </header>
  )
}
